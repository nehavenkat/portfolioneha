import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={10}>
          <h3>{this.props.schoolName}</h3>
        </Cell>
        <Cell col={2}>
          <h3>
            {this.props.startYear} - {this.props.endYear}
          </h3>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
