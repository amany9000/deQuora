//Profile Page updated
import React, { Component } from "react";
import "../../css/profile.css";
import Navbar from "../layout/Navbar";

export class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div>
          <img src={require("../../images/white.jpg")} className="back-img" />
          <img src={require("../../images/signup.png")} className="icon-img" />
          <div className="container profile">
            <div className="row">
              <div className="col-md-2 offset-md-5">
                <h4>Rohan25</h4>
              </div>
              <div className="col-md-1 mr-auto">
                <button className="but">
                  <span className="fa fa-edit" /> Edit
                </button>
              </div>
            </div>
            <h5>Rohan Dhoot</h5>
            <p>
              This is the short bio of user
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
