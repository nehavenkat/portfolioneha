import React, { Component } from "react";
import "../LandingPage/LandingPage.css";
import { FaLinkedinIn, FaGithub, FaGitlab } from "react-icons/fa";
import { Grid, Cell } from "react-mdl";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Grid className="landing-grid">
          {/* <img className="bg" src={Banner} alt="technology" /> */}
          <Cell col={12}>
            <img
              className="landingimg"
              src="https://nofiredrills.com/wp-content/uploads/2016/10/myavatar.png"
              alt="landingimg"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />
              <br />

              <p className="text-landing">
                HTML | CSS | Bootstrap | JavaScript
              </p>
              <p className="text-landing">
                React | Vue | C# | .Net | PostgreSQL
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
                <div className="landing-icons">
                  {/* Github */}
                  <a
                    href="https://gitlab.com/vsneha"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaGitlab />
                  </a>
                </div>
              </div>
            </div>
          </Cell>
        </Grid>
      </>
    );
  }
}
