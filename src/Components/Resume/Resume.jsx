import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "../Resume/Education";
import Experience from "../Resume/Experience";
import "../Resume/Resume.css";
//import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div className="container resume-container">
        <Grid>
          <Cell className="resume-right-col" col={10}>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Full Stack Development | Strive.School "
              schoolDescription="Stared working with Strive.School.Its an online program where I have learnt working with the both Frontend and Backend tools.
               I worked on Team projects contributed my work in developing App with the other developers."
            />
            <Education
              startYear={2011}
              endYear={2013}
              schoolName="Master of Sciences"
              schoolDescription="Pursed Masters in Networking and  Security from Cork Institution of Technology - Cork, Ireland."
            />
            <Education
              startYear={2007}
              endYear={2011}
              schoolName="Bachelors of Technology"
              schoolDescription="Pursed Bachelors in Computer Science Engineering from Jawaharlal Nehru Technology University - Hyderabad, India "
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={2020}
              endYear={2020}
              jobName=" Software Developer Intern - BlueBenu | Denmark "
              jobDescription="Stared as an Intern in Septwmber on developing mobile version of the BlueBenu website. I am mainly working on HTML and CSS and JavaScript and even on MongoDB."
            />
            <Experience
              startYear={2020}
              endYear={2020}
              jobName=" Web-Developer - Make It Good Again | Denmark "
              jobDescription="Stared in August as an Intern on developing mobile version of the MIGA website. I am mainly working on HTMLSlim and SCSS and JavaScript with some code in Ruby."
            />

            <Experience
              startYear={2020}
              endYear={2020}
              jobName=" Front-end Developer - Station | Copenhagen, Denmark "
              jobDescription="Stared in JUNE with developing website for Station where the student can Create Account,Login to his Account and the subscribe to strive payment."
            />

            <Experience
              startYear={2013}
              endYear={2015}
              jobName="Technical Suppoprt Associate - IBM | Hyderabad, India"
              jobDescription="Maintaining and troubleshooting the use of the local area networks LAN, Wide area networks WAN, connections to the internet and peripheral equipment.
              Evaluating and installing computer Hardware, Networking software, and Software applications.
              Dealing with Network Connectivity troubleshooting, TCP/IP, Dial-up, Token Ring, Ethernet, LAN/WAN Identifying Opportunity & Implementing Process Improvements.
              "
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Certifications</h2>
            <Education
              startYear={2018}
              endYear={2021}
              schoolName="Cisco Certified Network Associate"
              schoolDescription="As a CCNA certification holder I have the ability to install, set up, configure, troubleshoot and operate a medium-sized routed and switched computer network."
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
