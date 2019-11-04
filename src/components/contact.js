import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import facebook from './facebook.jpg';
import Git from './Git.png';
import LinkedIn from './LinkedIn.png';
import Twitter from './Twitter.png';
// {/*Component contains all contact details*/}
class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={4}>
                        <h2>Olwethu Lesley Mkhuhlane</h2>
                        <img src="https://media.licdn.com/dms/image/C4D03AQER9yPe0Tg0lg/profile-displayphoto-shrink_200_200/0?e=1573084800&v=beta&t=LJed2URV0txv1dYi4N_bIhdqPMeE6hpoSIwu6OxfDRY" alt="avatar" style={{height: '250px'}}/>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Feel free to contact me on any of the contact details provided.<hr/> Check my social links for more information.</p>
                    </Cell>
                    <Cell col={8}>
                     {/*used columns to split the page, contained in cells*/}
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                         {/*used a list for contact details*/}
                          <List>
                                <ListItem>
                                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-fax" aria-hidden="true"/>
                                        Email address : 3441039@myuwc.ac.za <br/> 
                                        Alt. Email : olwethumkhuhlane@gmail.com
                                  </ListItemContent>
                                </ListItem>
                               
                            {/*Social links*/}
                            <div className="social-links">
                                <nav class="social" id="header_icons">
                                    <a href="https://www.linkedin.com/in/olwethu-mkhuhlane-9a1388113/">
                                        <img class="img-thumbnail" src={LinkedIn} alt="LinkedIn" ></img></a>
                                    <a href="https://twitter.com/OMkhuhlane/">
                                        <img class="img-thumbnail" src={Twitter} alt="twitter" ></img></a>
                                    <a href="https://Github.com/OlwethuMkhuhlane">
                                        <img class="img-thumbnail" src={Git} alt="Github" ></img></a>
                                    <a href="https://www.facebook.com/olwethu.mkhuhlane">
                                        <img class="img-thumbnail" src={facebook} alt="HTML tutorial" ></img></a>
                                </nav>
                            </div>
                          </List>

                        </div>

                    </Cell>
                </Grid>
        </div>
        )
    }
}
export default Contact;