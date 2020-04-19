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
                Hello, I am Neha Setty, residing in Copenhagen, Denamrk.I'm a
                junior full stack developer, looking to learn and work on
                creative and innovative ideas. I aim to create high-performance
                websites and applications that look beautiful on all devices and
                browsers.
              </p>
              <h3>My Favorite Tools</h3>
              <div className="social-links">
                <div className="landing-icons">
                  <FaHtml5 />
                </div>
                <div className="landing-icons">
                  <FaCss3Alt />
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
