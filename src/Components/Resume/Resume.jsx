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
          <Cell className="resume-right-col" col={12}>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2022}
              endYear={2022}
              jobName=" Software Developer with focus on Front-end - Mouseflow | Copenhagen, Denmark "
              jobDescription="⇒ Participating in daily standups by providing work progress, discussions on any blockers, red flags etc.
              ⇒ Involved in Sprint planning (estimation of tickets), Retrospective (previous sprints updates), refinement sessions and Sprint demo.
              ⇒ Used agile project management tool JIRA to structure and manage the project development.
              ⇒ Designed and developed Mouseflow App using HTML, JS, CSS, and DOM elements to be responsive using media queries.
              ⇒ Developed a Vue.js App for the partner portal to access the Application and allow the partners to have an inbound, outbound commissions."
            />
            <Experience
              startYear={2021}
              endYear={2022}
              jobName=" Software Developer - Experis Denmark | Trasstrup, Denmark "
              jobDescription=" ⇒ Developed website, creating services, and worked on User interface along with validations of the forms.
              ⇒ Designed and developed API using ASP.NET and C#.NET.
              ⇒ Used Model-View-Control (MVC) pattern for the development of the web applications.
              ⇒ Used Observables and HTTP Client for asynchronous data transfer between the browser and the server.
              ⇒ Implemented user interface guidelines and standards throughout the development and maintenance 
               of the website using HTML, CSS, and JavaScript."
            />
            <Experience
              startYear={2020}
              endYear={2021}
              jobName=" Junior Developer - A Greater Mass | UK "
              jobDescription="⇒Developed a React App for the end users to access the Application and answer the questionnaire available on the App.
              ⇒Assisted by the Senior Developer with the Implementations of the login feature with MongoDB to manage, store and retrieve the user’s information.
              ⇒Used ASANA as project management tool, before moving the code to production."
            />
            <Experience
              startYear={2020}
              endYear={2020}
              jobName=" Software Developer Intern - BlueBenu | Denmark "
              jobDescription="⇒ Collaborated closely with the other Interns to plan, design, and develop solutions for the Application.
              ⇒ Implemented the code in React framework where only the employed user can access the Application 
               and book an appointment with the company for garbage collection of the reusable waste.
              ⇒ Developed the components and providers for Rest API calls, to fetch, and store data."
            />
            <Experience
              startYear={2020}
              endYear={2020}
              jobName=" Web-Developer - Make It Good Again | Emdrup, Denmark "
              jobDescription="⇒ Participated in daily scrum meetings and used agile project management tools to structure and manage the project development.
              ⇒ Modified HTML, JavaScript, and CSS web pages to optimize the page’s performance for faster loading and browsing."
            />
            <Experience
              startYear={2014}
              endYear={2016}
              jobName="IT System Analyst - IBM | Hyderabad, India"
              jobDescription="⇒ Analysed, designed and developed applications to the given specifications with phases of Software 
              Development Life Cycle (SDLC).
              ⇒ Interacted with software developers in identifying and developing advanced software solutions.
              ⇒ Documented clear and testable business requirements, function design specifications and Providing 
              business support during the post-implementation period."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Full Stack Development | Strive.School | Denmark"
            />
            <Education
              startYear={2011}
              endYear={2013}
              schoolName="Master of Sciences | CIT | Cork, Ireland"
            />
            <Education
              startYear={2007}
              endYear={2011}
              schoolName="Bachelors of Technology | JNTU | Hyderabad, India"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
