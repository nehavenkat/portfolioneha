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
          <Cell col={2}>
            {/* <div style={{ textAlign: "center" }}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQFIdTtCw3JiVQ/profile-displayphoto-shrink_100_100/0?e=1592438400&v=beta&t=vBVF1J_8CktvJG90CR_B8hovNw9AGzo-gSZ7N8KRrAQ"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div> */}
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Education
              startYear={2007}
              endYear={2009}
              schoolName="My 2nd University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
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
