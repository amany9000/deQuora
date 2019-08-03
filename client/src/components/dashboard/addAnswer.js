import React, { Component } from "react";
import "../../css/home.css";
import Navigation from "../layout/AuthNavbar";

import{NavLink} from 'react-router-dom';

class Addanswer extends Component {
  

 


  render() {
    return (
      <React.Fragment>
      <Navigation/>
        <div className="content-wrapper">
          <div className="w-container">
            
             <div className="card mb-4 homeCard white-wrapper">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="round">
                        <i className="fa fa-user logo" />
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="card-title">
                        How is life going on
                        <span style={{ float: "right" }} className="text-muted">
                          {" "}
                          11h ago
                        </span>
                      </div>
                      <div className="card-subtitle text-muted">
                        Rohan Dhoot| IIITV
                      </div>
                    </div>
                    <div className="body ml-3">
                      The copy warned the Little Blind Text, that where it came
                      from it would have been rewritten a thousand times and
                      everything that was left from its origin would be the word
                      "and" and the Little Blind <a href=""> (Read more...)</a>
                    </div>

                  
                  </div>
                      
                      <div className="row">
                      <div className="col-10">
                        <input type="text" className="comment" />
                      </div>
                      <div className="col-2">
                        <div>
                       <button className="btn btn-primary submit">Post</button>
                        </div>
                      </div>
                    </div>

                </div>
                </div>

        </div>
      </React.Fragment>
    );
  }
}

export default Addanswer;
