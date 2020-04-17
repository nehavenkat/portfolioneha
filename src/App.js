import React, { Component } from "react";
import LandingPage from "./Components/LandingPage/LandingPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LandingPage />
      </div>
    );
  }
}
