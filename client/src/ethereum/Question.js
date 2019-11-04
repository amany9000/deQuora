// This file contains functions which interact with the specified question instances. 
const compiledQues = require("./build/Question.json");

const {readQuestions, getWeb3, askQuestion} = require("./QuestionStore.js");

const getAllQuestions = async(pass) => {

	return await readQuestions(pass)
		.then( async (deployedques) => {
		
		const web3 = getWeb3(pass);	
		const accounts = await  web3.eth.getAccounts();
		
		const questionDetailList = [];
		for(i in deployedques){		
			const question = await new web3.eth.Contract(compiledQues.Question.abi, 
			deployedques[i]);

			const title = await question.methods.title().call();
			const tag = await question.methods.tag().call();
			const questioner = await question.methods.questioner().call();
			const hash = await question.methods.questionHash().call();
			const reward = await question.methods.reward().call();
			const target = await question.methods.target().call();
			const deadline = await question.methods.deadline().call();
			const answerIndex = await question.methods.answerIndex().call();
			const answerRating = await question.methods.answerRating().call();
			const startTime = await question.methods.startTime().call();
			const isCompleted = await question.methods.isCompleted().call();
			const isRetracted = await question.methods.isRetracted().call();
			const answerCount = await question.methods.answerCount().call();
			
			questionDetailList.push({
				title,
				tag,
				questioner,
				hash,
				reward,
				target,
				deadline,
				answerIndex,
				answerRating,
				startTime,
				isCompleted,
				isRetracted,
				answerCount
			});
			delete title,tag,questioner,hash,reward,target,deadline,answerIndex,answerRating,startTime,isCompleted,isRetracted,answerCount
		}
		console.log("List of Questions",questionDetailList);
		return questionDetailList;
	});
}
/*
const getquestionDetails = async(address, pass) => {
	
	const web3 = getWeb3(pass);				
	const accounts = await  web3.eth.getAccounts();		
	const questionDetailList = {};
	
	const question = await new web3.eth.Contract((JSON.parse(compiledInt.interface)), 
	address);
	
	const questionName = await question.methods.questionName().call();
	const questionDesc = await question.methods.questionDesc().call();
	const creatorName = await question.methods.creatorName().call();
	const creatorContact = await question.methods.creatorContact().call();



	//console.log(request)
	let i = 0;
	let BRDetail = [];
	
	const deployedReq = await question.methods.getDeployedRequests().call();

	const reqDetailList = [];
		for(i in deployedReq){		
			const req = await new web3.eth.Contract((JSON.parse(compiledReq.interface)), 
			deployedReq[i]);

			const description = await req.methods.description().call();
			const value = await req.methods.value().call();

			reqDetailList.push({
				address: deployedReq[i],
				description,
				value
			});
			delete description,value;
		}
	//console.log("reqDetailList - ", reqDetailList);
	i=0;
	let backRequest  = await question.methods.backRequests(0).call().catch((err) => {
		console.log("hey1",{questionName, questionDesc, creatorName, creatorContact})
		return {questionName, questionDesc, creatorName, creatorContact, reqDetailList}
	});	
	while(backRequest.source != null){
		BRDetail.push({
			index: i,
			request:
			{
			source: backRequest.source,
			dest: backRequest.dest ,
			value : backRequest.value
		}});
		i++;
		backRequest = await question.methods.backRequests(i).call().catch((err) => {
		//console.log("hey2", {questionName, questionDesc, creatorName, creatorContact, minContribution, approversCount})
		return {questionName, questionDesc, creatorName, creatorContact, BRDetail}
		});
	}
	console.log("BRDetail - ", BRDetail);	
	delete question,i,backRequest; 	
	console.log("hey3",{questionName, questionDesc, creatorName, creatorContact,reqDetailList, BRDetail})
	return {questionName, questionDesc, creatorName, creatorContact,reqDetailList, BRDetail}
}

const contribute = async(address, amount, pass) => {
	
	const web3 = getWeb3(pass);					
	const req = await new web3.eth.Contract((JSON.parse(compiledReq.interface)), 
		address);

	const accounts = await  web3.eth.getAccounts();
	console.log(accounts)
	await req.methods.contribute().send({
		from: accounts[0],
		value: amount
	});
}


const createRequest = async(address, description, contact, value, recipient ,min, pass) => {
	
	const web3 = getWeb3(pass);					
	const project = await new web3.eth.Contract((JSON.parse(compiledInt.interface)), 
		address);
	const accounts = await  web3.eth.getAccounts();
	
	await project.methods
			.createRequest(description,contact, value, recipient, min)
			.send({
				from: accounts[0],
				gas: "3000000"
			});
	console.log("yesss");			
}

const createBR = async(address, from, to, val, pass) => {
	
	const web3 = getWeb3(pass);					
	const int = await new web3.eth.Contract((JSON.parse(compiledInt.interface)), 
		address);
	const accounts = await  web3.eth.getAccounts();
	
	await int.methods
			.createBR(from, to, val)
			.send({
				from: accounts[0],
				gas: "3000000"
			});
	console.log("yesss");			
}

const finalizeRequest = async(address, pass) => {

	const web3 = getWeb3(pass);						
	const req = await new web3.eth.Contract((JSON.parse(compiledReq.interface)), 
		address);
	const accounts = await  web3.eth.getAccounts();
	let request  = await req.methods.finalizeRequest().send({
				from: accounts[0],
				gas: "3000000"
			}).then((xyz) => {
		console.log("Dne!!!!");
		return "Done";
	}).catch((err) => {
		console.log(err)
		return null;
	});
}

const finalizeBR = async(address, index, pass) => {

	const web3 = getWeb3(pass);						
	const int = await new web3.eth.Contract((JSON.parse(compiledInt.interface)), 
		address);
	const accounts = await  web3.eth.getAccounts();
	let request  = await int.methods.finalizeBR(index).send({
				from: accounts[0],
				gas: "3000000"
			}).then((xyz) => {
		console.log("Dne!!!!");
		return "Done";
	}).catch((err) => {
		console.log(err)
		return null;
	});
}

const approveBR = async(address, index, pass) => {

	const web3 = getWeb3(pass);							
	const int = await new web3.eth.Contract((JSON.parse(compiledInt.interface)), 
		address);
	const accounts = await  web3.eth.getAccounts();
	let request  = await int.methods.approveBR(index).send({
				from: accounts[0],
				gas: "3000000"
			}).then((xyz) => {
		console.log("Approved!!!!");
		return "Approved";
	}).catch((err) => {
		console.log(err)
		return null;
	});
}

const getBRDetails = async(address, index, pass) => {

	const web3 = getWeb3(pass);								
	const int = await new web3.eth.Contract((JSON.parse(compiledInt.interface)), 
		address);

	const accounts = await  web3.eth.getAccounts();
	let br  = await int.methods.backRequests(index).call().catch((err) => {
		return null;
	});

	let BRDesc = {source:br.source,
        dest:br.dest,
        value: br.value,
        approvalCount: br.approvalCount
        };
    console.log(BRDesc)
    return BRDesc;  
}
const getReqDetails = async(address, pass) => {

	const web3 = getWeb3(pass);								
	const req = await new web3.eth.Contract((JSON.parse(compiledReq.interface)), 
		address);
	const desp = await req.methods.description().call(); 
	const con = await req.methods.contact().call(); 
	const val = await req.methods.value().call(); 
	const rec = await req.methods.recipient().call(); 
	const com = await req.methods.complete().call(); 
	const man = await req.methods.manager().call(); 
	const min = await req.methods.minContribution().call(); 
	const app = await req.methods.approversCount().call(); 
	let reqDesc = {
		description: desp,
    	contact: con,
    	value: val,
    	recipient: rec,
    	complete: com,
    	manager: man,
    	minContribution: min,
    	approversCount: app	
        };
    console.log(reqDesc)
    return reqDesc;  
} */
getAllQuestions("hold capable clock raven sentence gun example thought name wonder chuckle spin");
//getquestionDetails("0x9EDe6739711Ba0Af33dec68578EF1df25F81f44E",0x9EDe6739711Ba0Af33dec68578EF1df25F81f44E);
//createRequest("0x9EDe6739711Ba0Af33dec68578EF1df25F81f44E", "Buying More Utensils","www.vendor.com", 5,"0x88a4dd75299C3628dc75ba58f238bD3Fff29Ede0",1, "cousin wasp clip dynamic advance devote this million magic bean ceiling anger");
//contribute("0x31E7cb1Ad0F3bbb45a77f56e12D12C7a3Dec1b55","1","cousin wasp clip dynamic advance devote this million magic bean ceiling anger");
//finalizeRequest("0x31E7cb1Ad0F3bbb45a77f56e12D12C7a3Dec1b55", "cousin wasp clip dynamic advance devote this million magic bean ceiling anger");
//getReqDetails("0x35F971fD3337C30dd1Fc80d73BAc1b64dB83DdB7", "cousin wasp clip dynamic advance devote this million magic bean ceiling anger")
//createBR("0x9EDe6739711Ba0Af33dec68578EF1df25F81f44E","0x35F971fD3337C30dd1Fc80d73BAc1b64dB83DdB7", "0x853F795E8B0767a50d0715241E4ac4644c016B36",5,"cousin wasp clip dynamic advance devote this million magic bean ceiling anger");
//getBRDetails("0x9EDe6739711Ba0Af33dec68578EF1df25F81f44E",0,"cousin wasp clip dynamic advance devote this million magic bean ceiling anger");
//approveBR("0x9EDe6739711Ba0Af33dec68578EF1df25F81f44E",0,"cousin wasp clip dynamic advance devote this million magic bean ceiling anger");
//finalizeBR("0x9EDe6739711Ba0Af33dec68578EF1df25F81f44E",0,"cousin wasp clip dynamic advance devote this million magic bean ceiling anger");
