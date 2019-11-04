
// This file contains read() which returns a promise containing the contract instance of inbox
const Web3 = require("web3");
const hdWalletProvider = require("truffle-hdwallet-provider");
const compiledStore = require("./build/QuestionStore.json");


const getWeb3 = (pass) => {
const provider = new hdWalletProvider(
	pass,
	"https://rinkeby.infura.io/v3/49ef474343844958a068e4f01ad0b2d5"  // This address will be generated through infura 
);

const web3 = new Web3(provider);
return web3;	
} 

const readQuestions = async (pass) => {
	const web3 = getWeb3(pass);
	//const accounts = await  web3.eth.getAccounts();
	const store = await new web3.eth.Contract(compiledStore.QuestionStore.abi, 
	"0xA094e130359Da96C6e76F8347676D988ea7f1672");

	const ques = await store.methods.getDeployedQuestions().call();
	return ques;
} 

/*
readQuestion("hold capable clock raven sentence gun example thought name wonder chuckle spin").then(async (deployedQues)=> {
	console.log(deployedQues);
})
*/
const askQuestion = async (Title, Tag, QuestionHash, Target, Deadline, pass) => {
	const web3 = getWeb3(pass);				
	console.log("hey")
	const accounts = await  web3.eth.getAccounts();
	const store = await new web3.eth.Contract(compiledStore.QuestionStore.abi, 
	"0xA094e130359Da96C6e76F8347676D988ea7f1672");
	const dep = await store.methods.getDeployedQuestions().call();
	console.log("before",dep);
	await store.methods.askQuestion(Title, Tag, QuestionHash, Target, Deadline).send(({gas: "3000000", from: accounts[0]}));	
	delete dep;
	return await store.methods.getDeployedQuestions().call();
} 
/*
askQuestion("Why we fall, Bruce", "Batman", "Qmk2wsa3131sad133e31", 1, 123, "hold capable clock raven sentence gun example thought name wonder chuckle spin").then(async(add) => {
	console.log("after deployment - ",add);
});
*/
module.exports = {readQuestions, getWeb3, askQuestion};
