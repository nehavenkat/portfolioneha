import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <h3>
            {this.props.startYear} - {this.props.endYear}
          </h3>
        </Cell>
        <Cell col={8}>
          <h3>{this.props.jobName}</h3>
          <p>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
