import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "../Resume/Education";
import Experience from "../Resume/Experience";
import "../Resume/Resume.css";
//import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div className="container">
        <Grid>
          <Cell className="resume-right-col" col={10}>
            <h2>Education</h2>
            <Education
              startYear={2018}
              endYear={2021}
              schoolName="Cisco Certified Network Associate"
              schoolDescription="As a CCNA certification holder I have the ability to install, set up, configure, troubleshoot and operate a medium-sized routed and switched computer network."
            />
            <Education
              startYear={2012}
              endYear={2014}
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
              startYear={2019}
              endYear={2020}
              jobName="Junior developer - Strive School | Copenhagen, Denmark "
              jobDescription="Stared working with Strive.School.Its an online program where I have learnt working with the both Frontend and Backend tools.
               I worked on Team projects contributed my work in developing App with the other developers."
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
            {/* <h2>Skills</h2>
             <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      /> */}
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
