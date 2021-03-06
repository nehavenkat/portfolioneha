import React, { Component } from "react";
import "../Projects/Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div className="d-flex all-cards">
        <div className="mainProjects">
          {/* <div className="leftMainProjects"></div> */}
          {/* <div className="middleMainProjects"> */}
          <div className="displayCards">
            <ul className="ulList">
              <li>
                <div className="card">
                  <div className="divImg">
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%",
                        height: "0",
                      }}
                    >
                      <iframe
                        title="LinkedIn App"
                        src="https://www.loom.com/embed/e4ece6ff8d7e4d98b44c81717862d27a"
                        frameborder="0"
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                        }}
                      ></iframe>
                    </div>
                  </div>
                  <div className="card__content">
                    <h3>LinkedIn App</h3>
                    <p>
                      {" "}
                      The FE is builded using HTML, CSS, JS and React <br />
                      The BE is builded using MongoDB
                    </p>
                  </div>

                  <div className="card-footer">
                    <a
                      href="https://github.com/nehavenkat/LinkedIn-Redux-FE"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Front End Repo
                    </a>
                    <hr />
                    <a
                      href="https://github.com/nehavenkat/linkedIn-neha-michael-fayju"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Back End Repo
                    </a>
                  </div>
                </div>{" "}
              </li>{" "}
            </ul>
          </div>
          <div className="displayCards">
            <ul className="ulList">
              <li>
                <div className="card">
                  <div className="divImg">
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%",
                        height: "0",
                      }}
                    >
                      <iframe
                        title="Meety App"
                        src="https://www.loom.com/embed/ea8d4180d2eb493a8d4c4ed0c0499844"
                        frameborder="0"
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                        }}
                      ></iframe>
                    </div>
                  </div>
                  <div className="card__content">
                    <h3>Meety App</h3>
                    <p>
                      {" "}
                      The FE is builded using HTML, CSS, JS and React <br />
                      The BE is builded using MongoDB
                    </p>
                  </div>

                  <div className="card-footer">
                    <a
                      href="https://github.com/faizanbardai/meety-fe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Front End Repo
                    </a>
                    <hr />
                    <a
                      href="https://github.com/faizanbardai/meety-be"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Back End Repo
                    </a>
                  </div>
                </div>{" "}
                {/* end of card */}
              </li>{" "}
              {/* end of li */}
            </ul>
          </div>
          <div className="displayCards">
            <ul className="ulList">
              <li>
                <div className="card">
                  <div className="divImg">
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%",
                        height: "0",
                      }}
                    >
                      <iframe
                        title="Projects and Reviews"
                        src="https://www.loom.com/embed/78c8ad7639b7440d8180a7d275a3c77d"
                        frameborder="0"
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                        }}
                      ></iframe>
                    </div>
                  </div>
                  <div className="card__content">
                    <h3>Projects and Reviews</h3>
                    <p>
                      {" "}
                      The project is builded using PostGress Database
                      <br />
                      It is shown in Postman and PGAdmin
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://github.com/nehavenkat/Products-Reviews-PostGres-Backend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Back End Repo
                    </a>
                    <hr />
                    <a
                      href="https://github.com/nehavenkat/Products-Reviews-PostGres-Backend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Back End Repo
                    </a>
                  </div>
                </div>{" "}
                {/* end of card */}
              </li>{" "}
              {/* end of li */}
            </ul>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
