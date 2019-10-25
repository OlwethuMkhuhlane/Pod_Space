import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "orangered",
                height: "200px",
                background:
                  "url(https://image.flaticon.com/icons/svg/2151/2151793.svg) center / cover",
                textAlign: "center",
                fontSize: "24px"
              }}
            >
              Snake Game.
            </CardTitle>
            <CardText>
              Created this game with grids using create-react-app.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/OlwethuMkhuhlane/Greedy-Snake"
              >
                GitHub Link
              </Button>
              <a
                href="https://griddy-snake.herokuapp.com/"
                class="w3-button w3-white"
              >
                Live Demo
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "orangered",
                height: "200px",
                background:
                  "url(https://image.flaticon.com/icons/svg/1332/1332316.svg) center / cover"
              }}
            >
              Weather App
            </CardTitle>
            <CardText>
              Created App using an API request with create-react-app
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/OlwethuMkhuhlane/my-weather-app"
              >
                GitHub Link
              </Button>
              <a
                href="https://my-weather-app-ol.herokuapp.com/"
                class="w3-button w3-white"
              >
                Live Demo
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "orangered",
                height: "200px",
                background:
                  "url(https://www.flaticon.com/premium-icon/icons/svg/2161/2161350.svg) center / cover"
              }}
            >
              Calculator
            </CardTitle>
            <CardText>
              Simple calculator for basic calculations create with create-react-app
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/OlwethuMkhuhlane/calculator"
              >
                GitHub Link
              </Button>
              <a
                href="https://OlwethuMkhuhlane.github.io/calculator"
                class="w3-button w3-white"
              >
                Live Demo
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 4 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "orangered",
                height: "200px",
                background:
                  "url(https://image.flaticon.com/icons/svg/2177/2177140.svg) center / cover",
                textAlign: "center",
                fontSize: "24px"
              }}
            >
              Online Store.
            </CardTitle>
            <CardText>
              Created this website with HTML, CSS and JavaScript
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/OlwethuMkhuhlane/Soulection-Store"
              >
                GitHub Link
              </Button>
              <a
                href="https://olwethumkhuhlane.github.io/Soulection-Store/"
                class="w3-button w3-white"
              >
                Live Demo
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 5 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "orangered",
                height: "200px",
                background:
                  "url(https://www.flaticon.com/premium-icon/icons/svg/781/781902.svg) center / cover",
                textAlign: "center",
                fontSize: "24px"
              }}
            >
              Financial Calculator.
            </CardTitle>
            <CardText>Created with Anaconda, a framework of Python.</CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/OlwethuMkhuhlane/FinancialCalculator"
              >
                GitHub Link
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } 
  }
  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>HTML</Tab>
          <Tab>Python</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;
