import React, { Component } from "react";
import "../LandingPage/LandingPage.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Grid, Cell } from "react-mdl";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Grid className="landing-grid">
          {/* <img className="bg" src={technology} alt="technology" /> */}
          <Cell col={12}>
            <img
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
          </Cell>
        </Grid>
      </>
    );
  }
}
