import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "25%" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://image.flaticon.com/icons/svg/2172/2172872.svg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | Java | NodeJS |
                Express | Python
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
