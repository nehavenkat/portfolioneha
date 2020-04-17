import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../Components/LandingPage/LandingPage";
import AboutMe from "../Components/AboutMe/AboutMe";
import Contact from "../Components/Contact/Contact";
import NavBar from "../Components/NavBar/NavBar";
import Resume from "../Components/Resume/Resume";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/contact" component={Contact} />
            {/* <Route path="/projects" component={Projects} /> */}
            <Route path="/resume" component={Resume} />
          </Switch>
        </Router>
      </div>
    );
  }
}
