import React, { Component } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  DiMongodb,
  DiPostgresql,
} from "react-icons/all";
import "../AboutMe/AboutMe.css";

import { Grid, Cell } from "react-mdl";
export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className="Container">
          <Grid>
            <Cell col={3}></Cell>
            <Cell className="resume-right-col" col={6}>
              <h1> Neha Venkat Setty.</h1>
              <p>
                {" "}
                <span>
                  Hello, I am Neha Setty, residing in Copenhagen, Denamrk.
                </span>
                <span>
                  I am passinated about coding. I have been working with
                  Strive.School from OCT 2019, a dedicated 6 months Boot Camp
                  program
                </span>
                <span>
                  I'm a junior full stack developer, looking to learn and work
                  on creative and innovative ideas. I aim to create
                  high-performance websites and applications that look beautiful
                  on all devices and browsers.
                </span>
              </p>
              <h4>Favorite Tools</h4>
              <div className="social-links">
                <div className="landing-icons">
                  <FaHtml5 />
                  {/* <div>HTML 5</div> */}
                </div>
                <div className="landing-icons">
                  <FaCss3Alt />
                  {/* <div>CSS 3</div> */}
                </div>
                <div className="landing-icons">
                  <FaReact />
                </div>
                <div className="landing-icons">
                  <FaNodeJs />
                </div>
                <div className="landing-icons">
                  <DiMongodb />
                </div>
                <div className="landing-icons">
                  <DiPostgresql />
                </div>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}
