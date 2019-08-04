var Question = artifacts.require("./Question.sol");
var QuestionsStore = artifacts.require("./QuestionStore.sol");

module.exports = function(deployer) {
  deployer.deploy(Question).then(DeployedContract => {
    deployer.deploy(QuestionsStore,DeployedContract.address);
  });
};
