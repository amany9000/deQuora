import React, { Component } from "react";
import Navigation from "../layout/Navbar";
import "../../css/home.css";

class Home extends Component {
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
                        className="card-title mt-3"
                        style={{ fontSize: "20px", marginLeft: "-25px" }}
                      >
                        Rohan Dhoot
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="question"
                        placeholder="What is your question?"
                      />
                    </div>
                    <div className="col-md-2">
                      <div>
                        <img
                          src={require("../../images/submit.svg")}
                          className="questionSubmit"
                        />
                      </div>
                    </div>
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
                    <div className="body">
                      The copy warned the Little Blind Text, that where it came
                      from it would have been rewritten a thousand times and
                      everything that was left from its origin would be the word
                      "and" and the Little Blind <a href=""> (Read more...)</a>
                    </div>
                    <div className="row">
                      <div className="col-10">
                        <input type="text" className="comment" />
                      </div>
                      <div className="col-2">
                        <div>
                          <img
                            src={require("../../images/submit.svg")}
                            className="submit"
                          />
                        </div>
                      </div>
                    </div>
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
                        What is Blockchain ?
                        <span style={{ float: "right" }} className="text-muted">
                          {" "}
                          11h ago
                        </span>
                      </div>
                      <div className="card-subtitle text-muted">
                        Rohan Dhoot | IIITV
                      </div>
                    </div>
                    <div className="body">
                      The copy warned the Little Blind Text, that where it came
                      from it would have been rewritten a thousand times and
                      everything that was left from its origin would be the word
                      "and" and the Little Blind <a href=""> (Read more...)</a>
                    </div>
                    <div className="row">
                      <div className="col-md-10">
                        <input type="text" className="comment" />
                      </div>
                      <div className="col-md-2">
                        <div>
                          <img
                            src={require("../../images/submit.svg")}
                            className="submit"
                          />
                        </div>
                      </div>
                    </div>
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
                        What are your views about stranger things ?
                        <span style={{ float: "right" }} className="text-muted">
                          {" "}
                          11h ago
                        </span>
                      </div>
                      <div className="card-subtitle text-muted">
                        Dipansh Khandelwal| Delhi
                      </div>
                    </div>
                    <div className="body">
                      The copy warned the Little Blind Text, that where it came
                      from it would have been rewritten a thousand times and
                      everything that was left from its origin would be the word
                      "and" and the Little Blind <a href=""> (Read more...)</a>
                    </div>
                    <div className="row">
                      <div className="col-md-10">
                        <input type="text" className="comment" />
                      </div>
                      <div className="col-md-2">
                        <div>
                          <img
                            src={require("../../images/submit.svg")}
                            className="submit"
                          />
                        </div>
                      </div>
                    </div>
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
                        How are the hostel facilities at IIITV?
                        <span style={{ float: "right" }} className="text-muted">
                          {" "}
                          11h ago
                        </span>
                      </div>
                      <div className="card-subtitle text-muted">
                        Aman Yadav | Hostel
                      </div>
                    </div>
                    <div className="body">
                      The copy warned the Little Blind Text, that where it came
                      from it would have been rewritten a thousand times and
                      everything that was left from its origin would be the word
                      "and" and the Little Blind <a href=""> (Read more...)</a>
                    </div>
                    <div className="row">
                      <div className="col-md-10">
                        <input type="text" className="comment" />
                      </div>
                      <div className="col-md-2">
                        <div>
                          <img
                            src={require("../../images/submit.svg")}
                            className="submit"
                          />
                        </div>
                      </div>
                    </div>
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
                        How are the hostel facilities at IIITV?
                        <span style={{ float: "right" }} className="text-muted">
                          {" "}
                          11h ago
                        </span>
                      </div>
                      <div className="card-subtitle text-muted">
                        Rohan Dhoot | IIITV
                      </div>
                    </div>
                    <div className="body">
                      The copy warned the Little Blind Text, that where it came
                      from it would have been rewritten a thousand times and
                      everything that was left from its origin would be the word
                      "and" and the Little Blind <a href=""> (Read more...)</a>
                    </div>
                    <div className="row">
                      <div className="col-md-10">
                        <input type="text" className="comment" />
                      </div>
                      <div className="col-md-2">
                        <div>
                          <img
                            src={require("../../images/submit.svg")}
                            className="submit"
                          />
                        </div>
                      </div>
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
