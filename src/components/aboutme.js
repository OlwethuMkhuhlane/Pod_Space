import React, { Component } from "react";
import "../App.css";
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return (
          <div className="contact-body" style={{ textAlign: "center", margin: "2%"}}>
            <Grid className="about-grid">
              <h1 style={{textAlign : "right"}}>About Page</h1>
                <p >
                  I am Olwethu Lesley Mkhuhlane a former student of the University
                  of the Western Cape, was pursuing a degree in Computer
                  Science. Couldn’t finish my degree because of financial issues. I
                  recently enrolled in a Co - Grammar bootcamp, in a 6 months
                  course in web - development.I am currently residing in Philippi region,
                  in Cape Town. I decided to pursue a career in programming because I fell in love
                  with the programming(Software Development) aspect of it. Although
                  that is not the only reason for choosing this career path, that is
                  the main reason. I can program in a few of the well - known
                  programming languages and such are mentioned in my resume.{" "}
                  <br></br>
                  As I mentioned that I am quite fond of problem solving and then
                  translating those solutions to programs that can be used daily.I
                  noticed that development involves getting hands-on programming
                  experience in the corporate world, so it caught my interest more. This influenced 
                  my eagerness to learn new skills by partaking in a Data science course at 
                  Explore Data Science Academy, where i managed to be an acredited data Scientist.
                  I believe I can work hard as everyone else but what sets me apart is
                  the attitude and enthusiasm I have about my activities and task
                  that have to do with work. That attitude is what drives me because
                  I am quite fond of everything that has to do with Software
                  Development and Data management & processing, be it planning, documenting, 
                  coding and testing, I approach all of my tasks with the attitude that they are very
                  important and must be paid attention to because they could be what
                  decides the success of any project.
                </p>
            </Grid>
          </div>
        );
    }
}

export default About;