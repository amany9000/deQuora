import React, { Component } from "react";
import "../../css/home.css";
import Navigation from "../layout/Navbar";

import{NavLink} from 'react-router-dom';

class Addanswer extends Component {
  

    state={
      votes:0,
      comments:0
    }
 


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
                      "and" and the Little Blind 
                    </div>

                  
                  </div>

                </div>



                <div  className="card homeCard white-wrapper">

                              <div className="row">

                      <div className="col-10">
                        <input placeholder="Answer this question " type="text" className="comment" />
                      </div>
                      <div className="col-2">
                        <div>
                       <button className="btn btn-primary submit">Post</button>
                        </div>
                      </div>
                    </div>
                    </div>


                   <div  style={{backgroundColor:"#F0F0F0" }}className="card homeCard white-wrapper mt-4">
                          <div className="mb-4">
                          <h4>Answers </h4>
                          </div>

                             <div className="row mb-4">
                    <div className="col-md-2">
                      <div className="round">
                        <i className="fa fa-user logo" />
                      </div>
                    </div>
                     <div className="col-md-4 author ">
                      Aman Yadav | IIITV
                    </div>
                    <div className="col-md-6">
                      <div className="card-title">
                        <span style={{ float: "right" }} className="text-muted">
                           {" "}
                          11h ago
                        </span>
                      </div>
                      
                    </div>
                    <div className="body ml-3">
                      The copy warned the Little Blind Text, that where it came
                      from it would have been rewritten a thousand times and
                      everything that was left from its origin would be the word
                      "and" and the Little Blind 
                    </div>

                  
                  </div>
                      <div className="row mt-1">
                      <div className="col-md-2 ml-1">
                      <i className="fa fa-2x fa-heart"></i>{" "}<strong>{this.state.votes}</strong>
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
