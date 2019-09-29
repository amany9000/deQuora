import React from "react";
import Login from "./components/authentication/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/dashboard/home";
import Addanswer from './components/dashboard/addAnswer';
import Communities from "./components/dashboard/Communities";
import Profile from "./components/dashboard/Profile";
// import Question from "./contracts/Question.json";
// import QuestionStore from "./contracts/QuestionStore.json";
import getWeb3 from "./utils/getWeb3";

class App extends React.Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    questionInstance: null,
    questionStoreInstance: null,
    owner: null,
    balance: 0
  };


  // componentDidMount = async () => {
  //   try {
  //     // Get network provider and web3 instance.
  //     const web3 = await getWeb3();

  //     // Use web3 to get the user's accounts.
  //     const accounts = await web3.eth.getAccounts();

  //     // Get the contract instance.
  //     const networkId = await web3.eth.net.getId();
  //     const deployedNetworkQ = Question.networks[networkId];
  //     const deployedNetworkQS = QuestionStore.networks[networkId];
  //     const questionInstance = new web3.eth.Contract(
  //       Question.abi,
  //       deployedNetworkQ && deployedNetworkQ.address,
  //     );
  //     const questionStoreInstance = new web3.eth.Contract(
  //       QuestionStore.abi,
  //       deployedNetworkQS && deployedNetworkQS.address,
  //     );

  //     // Set web3, accounts, and contract to the state, and then proceed with an
  //     // example of interacting with the contract's methods.


  //     questionStoreInstance.methods.askQuestion('dipansh', 'tag', 'des', 3, 4).send({ from: accounts[1], value: 10 })


  //     this.setState({ web3, accounts, questionInstance, questionStoreInstance }, this.sone);
  //   } catch (error) {
  //     // Catch any errors for any of the above operations.
  //     alert(
  //       `Failed to load web3, accounts, or contract. Check console for details.`,
  //     );
  //     console.error(error);
  //   }
  // };


  render() {
    const { questionInstance, questionStoreInstance, accounts } = this.state
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/communities" component={Communities} />
          <Route exact path="/profile" component={Profile} />
           <Route exact path="/addAnswer" component={Addanswer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
