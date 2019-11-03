
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

const readQuestion = async (pass) => {
	const web3 = getWeb3(pass);
	const accounts = await  web3.eth.getAccounts();
	const store = await new web3.eth.Contract(compiledStore.QuestionStore.abi, 
	"0xd05453792e7294682E92bcFf4023b116bA83Ca09");

	return await store.methods.askedQuestions(0).call();
} 


readQuestion("hold capable clock raven sentence gun example thought name wonder chuckle spin").then(async (deployedQues)=> {
	console.log(deployedQues);
})

const askQuestion = async (Title, Tag, QuestionHash, Target, Deadline, pass) => {
	const web3 = getWeb3(pass);				
	const accounts = await  web3.eth.getAccounts();
	const store = await new web3.eth.Contract(compiledStore.QuestionStore.abi, 
	"0xd05453792e7294682E92bcFf4023b116bA83Ca09");
	return await store.methods.askQuestion(Title, Tag, QuestionHash, Target, Deadline).send(({gas: "3000000", from: accounts[0]}));	
	// delete dep;
	//return await store.methods.getDeployedInitiatives().call()
} 
/*
askQuestion("Why we fall, Bruce", "Batman", "Qmk2wsa3131sad133e31", 1, 123, "hold capable clock raven sentence gun example thought name wonder chuckle spin").then(async(add) => {
	console.log("after deployment - ",add);
});
*/
module.exports = {readQuestion, getWeb3, askQuestion};
