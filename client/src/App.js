import React from "react";
import Login from "./components/authentication/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/dashboard/home";
import Addanswer from './components/dashboard/addAnswer';
import Communities from "./components/dashboard/Communities";
import Profile from "./components/dashboard/Profile";
function App() {
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

export default App;
