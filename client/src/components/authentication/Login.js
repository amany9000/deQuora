import React, { Component } from "react";
import image from "../../images/undraw_online_discussion_5wgl.svg";
import "../../css/login.css";
import {NavLink} from 'react-router-dom';
import AuthNavbar from "../layout/AuthNavbar";
class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <AuthNavbar />
        <div className="loginDiv">
          <div className="row">
            <div className="col-md-6 limit">
              <img src={image} alt="" />
            </div>
            <div className="col-md-6">
              <div className="auth__auth">
                <h1 className="auth__title">Welcome to Dequora !!</h1>
                <p>A blockchain based questions & answer application</p>
                <form className="form">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="your@example.com"
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    autoComplete="off"
                  />
                  <NavLink to = '/home'>.
                  <button  className="button button__accent">
                     Click here to get started !
                  </button>
                  </NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
