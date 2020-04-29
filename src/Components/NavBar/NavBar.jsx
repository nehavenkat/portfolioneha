import React, { Component } from "react";
import { Header, Navigation, Content, Layout } from "react-mdl";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "100px", position: "relative" }}>
          <Layout>
            <Header
              transparent
              title="Neha Venkat Setty"
              style={{ color: "white" }}
            >
              <Link to="/">
                <div className="header-title">Home</div>
              </Link>

              <Navigation>
                <Link to="/aboutme">
                  <div>About me</div>
                </Link>
                <Link to="/resume">
                  <div>Resume</div>
                </Link>
                <Link to="/projects">
                  <div>Projects</div>
                </Link>
                <Link to="/contact">
                  <div>Contact</div>
                </Link>

                {/* <a href="aboutme">About Me</a>
                <a href="resume">Resume</a>
                <a href="projects">Projects</a>
                <a href="contact">Contact</a> */}
              </Navigation>
            </Header>
            {/* 
            <Drawer>
              <Navigation>
                <a href="aboutme">About Me</a>
                <a href="resume">Resume</a>
                <a href="projects">Projects</a>
                <a href="contact">Contact</a>
              </Navigation>
            </Drawer> */}
            <Content />
          </Layout>
          {/* </Layout> */}
        </div>
      </div>
    );
  }
}
