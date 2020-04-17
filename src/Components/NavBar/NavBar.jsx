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
                <a href="aboutme">About Me</a>
                <a href="resume">Resume</a>
                <a href="projects">Projects</a>
                <a href="contact">Contact</a>
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
