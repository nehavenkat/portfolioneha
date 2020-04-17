import React, { Component } from "react";
// import { Grid, Cell } from "react-mdl";
import { Col } from "reactstrap";
//import technology from "../../Images/technology.jpg";
import "../LandingPage/LandingPage.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="landing-grid">
          {/* <img className="bg" src={technology} alt="technology" /> */}
          <Col col={12}>
            <img
              // src="https://media-exp1.licdn.com/dms/image/C5603AQFIdTtCw3JiVQ/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=wh3K-sFIjNPn9gpz1EDFGY2_EoIdsOdaFyN0Skfi9-0"
              src="https://nofiredrills.com/wp-content/uploads/2016/10/myavatar.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />
              <br />

              <p className="text-landing">
                HTML | CSS | Bootstrap | JavaScript | React
              </p>
              <p className="text-landing">
                NodeJS | Express | MongoDB | PostgreSQL
              </p>

              <div className="social-links">
                <div className="landing-icons">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/neha-venkatsetty/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>

                {/* Github */}
                <div className="landing-icons">
                  <a
                    href="https://github.com/nehavenkat"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </>
    );
  }
}
