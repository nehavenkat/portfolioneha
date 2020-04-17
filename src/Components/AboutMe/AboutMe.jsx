import React, { Component } from "react";
import "../AboutMe/AboutMe.css";

import { Grid, Cell } from "react-mdl";
export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className="Container">
          <Grid>
            <Cell col={2}></Cell>
            <Cell className="resume-right-col" col={8}>
              <h1>I am Neha Venkat Setty.</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s"
              </p>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}
