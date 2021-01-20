import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import facebook from './facebook.jpg';
import Git from './Git.png';
import LinkedIn from './LinkedIn.png';
import Twitter from './Twitter.png';
import DownloadLink from './download';
// {/*Component contains all contact details*/}
class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Olwethu Lesley Mkhuhlane</h2>
                        <img src="https://www.flaticon.com/premium-icon/icons/svg/3242/3242257.svg" alt="avatar" style={{height: '250px'}}/>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Feel free to contact me on any of the contact details provided.<hr/> Check my social links for more information.</p>
                    </Cell>
                    <Cell col={6}>
                     {/*used columns to split the page, contained in cells*/}
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                         {/*used a list for contact details*/}
                          <List>
                                <ListItem>
                                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-fax" aria-hidden="true"/>
                                         <br/>
                                        olwethumkhuhlane@gmail.com <br/> 
                                        or <br/>
                                        3441039@myuwc.ac.za
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
                                        <img class="img-thumbnail" src={facebook} alt="facebook" ></img></a>
                                </nav>
                            </div>
                          </List>
                        <a href={this.props.src} download>{this.props.children}</a>
                        <DownloadLink src="./Olwethu_Mkhuhlane_CV.pdf">Click Here to download CV copy</DownloadLink><br/>
                        <a href="./Olwethu_Mkhuhlane_CV.pdf" download> Download CV</a>
                        </div>

                    </Cell>
                </Grid>
        </div>
        )
    }
}
export default Contact;