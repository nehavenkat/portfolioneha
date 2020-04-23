import React, { Component } from "react";
import Card from "../../Components/Projects/Card";
import "../Projects/Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center all-cards">
        <div className="row">
          <div className="col-md-4">
            <Card
              player="https://www.youtube.com/watch?v=_tBZM1sNT9M"
              title="first project"
            />
          </div>
          <div className="col-md-4">
            <Card title="first project" />
          </div>
          <div className="col-md-4">
            <Card title="first project" />
          </div>
        </div>
      </div>
    );
  }
}
