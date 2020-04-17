import React, { Component } from "react";
import { Header, Navigation, Drawer, Content, Layout } from "react-mdl";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "300px", position: "relative" }}>
          <Layout>
            <Header transparent title="My Portfolio" style={{ color: "white" }}>
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

            <Drawer>
              <Navigation>
                <a href="aboutme">About Me</a>
                <a href="resume">Resume</a>
                <a href="projects">Projects</a>
                <a href="contact">Contact</a>
              </Navigation>
            </Drawer>
            <Content />
          </Layout>
          {/* </Layout> */}
        </div>
      </div>
    );
  }
}
