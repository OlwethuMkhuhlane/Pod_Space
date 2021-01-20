import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return (
          <div >
            <Grid>
              <Cell col={4}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/business-and-it-person/512/person2-512.png"
                    alt="avatar"
                    style={{ height: "200px" }}
                  />
                </div>

                <h2 style={{ paddingTop: "2em" }}>Olwethu Lesley Mkhuhlane</h2>
                <h4 style={{ color: "grey" }}>Programmer/Developer/Analyst</h4>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <p>
                  Passionate programmer with 6 years of experience. Started as a 
                  student at the University of the  Western Cape for 4 years, 
                  could not finish the course due to unforeseen circumstances. 
                  Took on  a Software development and Web Development boot-camp 
                  with Hyperion Development for 6  months. Recently was a student 
                  intern at Explore Data Science Academy. I am quite fond of problem 
                  solving and translating those solutions to programs that can be 
                  used practically.
                </p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <h5>Address</h5>
                <p>4361 Oliver Tambo Street, Village 4A, Browns Farm</p>
                <h5>Phone</h5>
                <p>062 087 8533</p>
                <h5>Email</h5>
                <p>olwethumkhuhlane@gmail.com</p>
                <p>3441039@myuwc.ac.za</p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              </Cell>
              <Cell className="resume-right-col" col={8}>
                <h2>Educational Experience</h2>

                <Education
                  startYear={2020}
                  endYear={2020}
                  schoolName="Explore Data Science Academy"
                  schoolDescription="EDSA teaches data skills based on recent issues utilizing the most recent data science  innovations. 
                  With courses filled with practical problems that taught me how to be valuable in  the real world."
                />

                <Education
                  startYear={2019}
                  endYear={2019}
                  schoolName="Co-Grammar & Life Choices"
                  schoolDescription="Studied Full stack web-Dev and software development. 6 Months course."
                />

                <Education
                  startYear={2014}
                  endYear={2017}
                  schoolName="University of the Western cape"
                  schoolDescription="Was studying BSc Computer Science. Extended course to a 4 year degree. Failed my major in the second year level and didn't get funding to continue."
                />

                <Education
                  startYear={2009}
                  endYear={2013}
                  schoolName="Sophumelela Senior Secondary School"
                  schoolDescription="Studied Physical Science and Mathematics in grade 10 to 12. Completed my matric in 2013 with a Bachelor's pass."
                />
                <hr style={{ borderTop: "3px solid #e22947" }} />

                <h2>Work Experience</h2>

                <Experience
                  startYear={2020.12}
                  endYear={2020.06}
                  jobName="Telkom Intern under BCX"
                  jobDescription="Worked with call center data in tracking repeat callers and using data obtained to keep customer services at best."
                />

                <Experience
                  startYear={2019.04}
                  endYear={2019.12}
                  jobName="Student Intern at Hyperion Dev and Co-Grammar"
                  jobDescription="Received lessons and projects based on software development, using the MERN stack and graduated as a qualified intern."
                />

                <Experience
                  startYear={2019.01}
                  endYear={2019.03}
                  jobName="iiNet"
                  jobDescription="An Australian based ISP company call center. Did customer service and technical support."
                />

                <Experience
                  startYear={2018.11}
                  endYear={2019.01}
                  jobName="Amazon Customer Service"
                  jobDescription="Worked with American customers in tracking, ordering and cancelling retail orders. The contarct was for the festive season(1 month contract)."
                />
                <hr style={{ borderTop: "3px solid #e22947" }} />
                <h2>Software Dev Skills</h2>
                <Skills skill="javascript" progress={85} />
                <Skills skill="HTML/CSS" progress={90} />
                <Skills skill="NodeJS" progress={65} />
                <Skills skill="React" progress={80} />
                <Skills skill="Express" progress={68} />
                <Skills skill="java" progress={75} />
                <Skills skill="Python" progress={90} />

                <hr style={{ borderTop: "3px solid #e22947" }} />
                <h2>Data Science Skills</h2>

                    
                
                <Skills skill="Gathering and Managing Data" progress={100} />
                <Skills skill="HTML/Analytical Programming" progress={90} />
                <Skills skill="NodeData Visualisation" progress={95} />
                <Skills skill="Machine Learning" progress={80} />
                <Skills skill="Model Deployment " progress={90} />
                <Skills skill="THRIVE (Soft Skills)" progress={95} />
                <Skills skill="Python & Jupiter Notebooks" progress={90} />
              </Cell>
            </Grid>
          </div>
        );
    }
}

export default Resume;