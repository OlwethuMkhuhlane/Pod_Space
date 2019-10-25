import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return (
          <div>
            <Grid>
              <Cell col={4}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://media.licdn.com/dms/image/C4D03AQER9yPe0Tg0lg/profile-displayphoto-shrink_200_200/0?e=1573084800&v=beta&t=LJed2URV0txv1dYi4N_bIhdqPMeE6hpoSIwu6OxfDRY"
                    alt="avatar"
                    style={{ height: "200px" }}
                  />
                </div>

                <h2 style={{ paddingTop: "2em" }}>Olwethu Lesley Mkhuhlane</h2>
                <h4 style={{ color: "grey" }}>Programmer/Developer</h4>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <p>
                  I can program in a few of the well-known programming languages
                  such as Python, CSS, HTML, JavaScript and Java. I am quite
                  fond of problem solving and translating those solutions to
                  programs that can be used practically.
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
                  startYear={2019}
                  endYear={2019}
                  schoolName="Co-Grammar & Life Choices"
                  schoolDescription="Currently studying Fill stack web-Dev and software development. 6 Months course."
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
                  startYear={2018.11}
                  endYear={2018.12}
                  jobName="Amazon Customer Service"
                  jobDescription="Worked with American customers in tracking, oredering and cancelling orders. The contarct was for the festive season(1 month contract)."
                />

                <Experience
                  startYear={2019.01}
                  endYear={2018.03}
                  jobName="iiNet"
                  jobDescription="An Australian based ISP company call center. Did customer service and technical support."
                />
                <hr style={{ borderTop: "3px solid #e22947" }} />
                <h2>Skills</h2>
                <Skills skill="javascript" progress={85} />
                <Skills skill="HTML/CSS" progress={90} />
                <Skills skill="NodeJS" progress={65} />
                <Skills skill="React" progress={80} />
                <Skills skill="Express" progress={68} />
                <Skills skill="java" progress={75} />
                <Skills skill="Python" progress={90} />
              </Cell>
            </Grid>
          </div>
        );
    }
}

export default Resume;