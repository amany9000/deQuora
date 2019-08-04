pragma solidity ^0.5.8;

contract QuestionStore {
    mapping(address => uint) public upVoterRating;
    Question[] public askedQuestions;
    mapping(address => bool) public askedQuestionsMap;

    function getVoterRating(address payable voter) public view returns (uint){ 
        return upVoterRating[voter];
    }

    function setVoterRating(address payable voter, uint val) public { 
        require(askedQuestionsMap[msg.sender]);
        upVoterRating[voter] = val;
    }

    function askQuestion(string memory Title, string memory Tag, string memory QuestionHash, uint Target, uint  Deadline) public payable{
        Question newQuestion = (new Question).value(msg.value)(Title, Tag, msg.sender, QuestionHash, Target, Deadline);
        askedQuestions.push(newQuestion);
        askedQuestionsMap[address(newQuestion)] = true;
    }

    function getDeployedQuestions() public view returns (Question[] memory) {
        return askedQuestions;
    }
}

contract Question {
    string public title;
    string public tag;
    address payable public questioner;
    string public questionHash;
    uint public reward;
    uint public target;
    uint public deadline;             // In days
    QuestionStore public owner;
    int public answerIndex;
    int public answerRating;
    uint public completeTime;
    uint public startTime;
    bool public isCompleted;         // Are #upVotes == Target
    bool public isRetracted;
    uint public answerCount;
    
    mapping(address => bool) upVoteBool;
    
    Answer [] public answers;
    
    struct Answer{
        address payable [] upVoters;
        uint upVoteCount;
        address payable answerer;
        string answerHash;
        int questionerResponse;
        uint sumVoterRating;
    }

    constructor (string memory Title, string memory Tag, address payable Questioner, string memory QuestionHash, uint Target, uint  Deadline) public payable{
        title = Title;
        tag = Tag;
        questioner = Questioner;
        questionHash = QuestionHash;
        reward = address(this).balance;
        target = Target;
        deadline = Deadline; 
        owner = QuestionStore (msg.sender);
        answerIndex = -1;
        answerRating = 0;
        startTime = now;
        isCompleted = false;
        isRetracted = false;
        answerCount = 0;
    }
    
    function answer(string memory hash) public {
        require(!isRetracted && (answerIndex == -1));
        
        address payable [] memory voters;
        Answer memory newAnswer = Answer({
            upVoters: voters,
            upVoteCount: 0, 
            answerer: msg.sender,
            answerHash: hash,
            questionerResponse: 0,
            sumVoterRating: 0
        });
        answerCount++;
        answers.push(newAnswer);
    }
    
    function giveRating(uint index, int rating) public {
        require((!isRetracted) && (index <= answerCount));
        require(answerIndex == -1);
        require(((msg.sender == questioner ) && ((rating > -6) && (rating < 6))) || ( ( ( (now - completeTime)/ 864000) > 1) && isCompleted ) );   // greater than 10 days


        
        uint answererShare;
        
        if(msg.sender == questioner){
            answerRating = rating;
            questioner.transfer( (address(this).balance) / 3);
        }
        
        else{
            answerRating = 0;
        }
        
        if (answers[index].upVoteCount < target){
            answererShare =  ( 40 + ( ( (target - answers[index].upVoteCount ) / target) * 20) ) / 100; 
            answererShare *= (address(this).balance) ;
            answerRating = 5;
        }
        
        else{
            answerRating = rating;
            if(answerRating == 5) { answererShare = ((address(this).balance) * 3/10);}
            else if (answerRating == 4) {answererShare = ((address(this).balance) * 8/25);} 
            else if (answerRating == 3) {answererShare = ((address(this).balance) * 17/50);} 
            else if (answerRating == 2) {answererShare = ((address(this).balance) * 9/50);} 
            else if (answerRating == 1) {answererShare = ((address(this).balance) * 19/50);} 
            else if (answerRating == 0) {answererShare = ((address(this).balance) * 2/5);} 
            else if (answerRating == -1) {answererShare = ((address(this).balance) * 13/25);} 
            else if (answerRating == -2) {answererShare = ((address(this).balance) * 16/25);} 
            else if (answerRating == -3) {answererShare = ((address(this).balance) * 19/25);} 
            else if (answerRating == -4) {answererShare = ((address(this).balance) * 22/25);} 
            else                        {answererShare = (address(this).balance);} 
        }
        
        
        answerIndex = int (index) ;
        
        answers[index].answerer.transfer(answererShare);
        
        if(rating > -1){
            
            answers[index].sumVoterRating += (uint(rating + 1) * answers[index].upVoteCount);
            for (uint i=0; i<answers[index].upVoteCount; i++) {
                
                uint voterRating = owner.getVoterRating(answers[index].upVoters[i]);
                voterRating += uint(rating + 1);
                owner.setVoterRating(answers[index].upVoters[i], voterRating);
                answers[index].upVoters[i].transfer( ( (address(this).balance) * voterRating ) / answers[index].sumVoterRating);
                }    
        }
        
        else {
            for (uint i=0; i<answers[index].upVoteCount; i++) {
        
                uint voterRating = owner.getVoterRating(answers[index].upVoters[i]);
                answers[index].upVoters[i].transfer( (  (address(this).balance) * voterRating) / answers[index].sumVoterRating);
            }
        }
    }
    
    function upVote(uint index) public{
        require(!isRetracted);
        require((!upVoteBool[msg.sender]) && (index <= answerCount));
        require((answers[index].upVoteCount) < target);
        
        if( owner.getVoterRating(msg.sender) == 0 ){
            owner.setVoterRating(msg.sender, 100);
        }
        
        answers[index].upVoteCount++;
        upVoteBool[msg.sender] = true;
        answers[index].upVoters.push(msg.sender);
        answers[index].sumVoterRating += owner.getVoterRating(msg.sender);
        
        if(answers[index].upVoteCount == target){
            completeTime = now;
            isCompleted = true;
        }
    }

    function retractQuestion() public{
        require((!isRetracted) && (!isCompleted));
        require( (answerIndex == -1) && (msg.sender == questioner) && ((now - startTime) > (4 * deadline)));
        questioner.transfer(address(this).balance);
        isRetracted  = true;
    }
    
}