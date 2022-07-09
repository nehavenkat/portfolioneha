import React, { Component } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  DiVisualstudio,
  FaVuejs,
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
            <Cell className="right-col" col={6}>
              <h1> Hello!!</h1>
              <p>
                {" "}
                <span>
                  I am a Software Developer residing in Copenhagen, Denmark.
                </span>
                <span>
                  I am self-motivated IT professional with passion for building interactive and responsive websites.
                  A proactive problem solver with good communication skills, over the years I have developed an adept knowledge of JavaScript, React, Vue, C#, Html and CSS. 
                  I am structured, curious and a good team player. 

                </span>
                <span>
                  Currently seeking to pursue an opportunity in a growing organization that will utilize and enhance my knowledge in software development.
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
                  <DiVisualstudio />
                </div>
                <div className="landing-icons">
                  <FaVuejs />
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
