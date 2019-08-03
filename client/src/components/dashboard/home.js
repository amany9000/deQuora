import React, { Component } from "react";
import Navigation from "../layout/Navbar";
import "../../css/home.css";
import{NavLink} from 'react-router-dom';

class Home extends Component {
  

  state={
    fileHash:null,
    copySuccess:'',
    votes:0,
    comments:0
  }

 buttonClick = ()=>{
    this.setState({
      fileHash:"ASIFFD5458478423DFDDFUH34"
    })
 }

   copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };


  render() {
    return (
      <React.Fragment>
        <Navigation />

        <div className="content-wrapper">
          <div className="w-container">
            <div className="w-row">
              <div className="w-col w-col-3">
                <div className="sidebar-header">Feed</div>
                <div className="white-wrapper">
                  <ul className="feed">
                    <li className="mb-2">
                      <a href="#">Web development</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Painting </a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Computer Vision</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Travelling</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Research</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Algorithm</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Blockchain</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">EthIndia</a>
                    </li>{" "}
                    <li className="mb-2">
                      <a href="#">Designing </a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Computer Vision</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Netflix</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Cricket World Cup</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Football</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Crypto</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">IIITV</a>
                    </li>
                  </ul>
                </div>
              </div>









              <div className="content-column w-col w-col-9">
                <div className="card mb-4 homeCard">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="round">
                        <i className="fa fa-user logo" />
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div
                        className="card-title mt-2"
                        style={{ fontSize: "20px", marginLeft: "-25px" }}
                      >
                        Rohan Dhoot
                      </div>
                    </div>
                  </div>
                   <div className="row">
                    <div className="col-md-12">
                      <input style={{width:"100px"}}
                        type="text"
                        className="title"
                        placeholder="Title of the question"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="question"
                        placeholder="Add Description"
                      />
                    </div>
                  </div>
                  <div>
                  <div className="row">
                    <div className="col-md-10 ">
                    {

                    }
                      <button 
                      onClick={() => this.buttonClick()}
                       className="btn btn-outline-primary ">
                       Upload to IPFS
                      </button>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">

                      {
                        this.state.fileHash?
                        <div className="row" >
                        <div className="col-md-3 ">
                         <p className="text-success float-left ">  Your IPFS hash:</p> 
                         </div>
                         <div className="col-md-9 ">
                            <div style={{display:"flex", justifyContent:"space-between"}} className="row ">
                            <div  className="col-md-6">
                            
                              <input style={{width:"300px",height:"40px"}} type="text" editable="false"
                                ref={(textarea) => this.textArea = textarea}
                                value='ASIFFD5458478423DFDDFUH34'/>
                            
                            </div>
                            <div className="col-md-3">
                          {
         
                             document.queryCommandSupported('copy') &&
                                <button className="btn btn-primary"onClick={this.copyToClipboard}>
                                Copy</button> 
                                
                              
                            }
                            </div>

                            </div>
                         </div>
                         
                         </div>
                        :
                        <div>
                        <p  className="text-danger float-left">Please upload the question to IPFS !!</p>
                        </div>
                      }
                        </div>
                    </div>

                    </div>
                    <div className="row ">
                    {
                      this.state.fileHash ?
                      <div className="col-md-4">
                      <button className="btn btn-outline-primary">
                        Add Question
                      </button>
                    </div>
                  

                  :
                  <div className="col-md-4">
                      <button className="btn btn-secondary" disabled>
                        Add Question
                      </button>
                    </div>
                  

                    }
                    </div>
                </div>



                <div className="card mb-4 homeCard">
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
                      

                  <div className="row mt-4 ">
                      <div className="col-md-12">
                      <NavLink to='/addAnswer' >
                      <button className="btn btn-primary float-right" >
                        Answer question
                      </button>
                      </NavLink>
                      </div>
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

export default Home;
