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

          {/* Project 6 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "orangered",
                height: "200px",
                background:
                  "url(https://www.flaticon.com/svg/vstatic/svg/2856/2856873.svg?token=exp=1610836190~hmac=98feabc4afce2ac1e0a3aaaf6ae2b2f7) center / cover",
                textAlign: "center",
                fontSize: "24px"
              }}
            >
              Heckathon 1 Climate Change Belief Analysis.
            </CardTitle>
            <CardText>Participated as a Team in a Climate Change Belief Analysis heckathon (As Team_3_CPT_classification_crusaders : Ranked 2nd)</CardText>
            <CardActions border>
              <Button
                colored
                href="https://www.kaggle.com/c/climate-change-belief-analysis/leaderboard"
              >
                Kaggle leaderboard link
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


           {/* Project 7 */}
           <Card shadow={0} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "orangered",
                height: "200px",
                background:
                  "url(https://www.flaticon.com/svg/vstatic/svg/2171/2171471.svg?token=exp=1610835454~hmac=9ced347dfc8670e8415d314c8948da53) center / cover",
                textAlign: "center",
                fontSize: "24px"
              }}
            >
              Heckathon 2 Sendy Logistics Challenge.
            </CardTitle>
            <CardText>Participated as a Team in a Sendy Logistics Challenge heckathon in Predicting the estimated time of arrival (ETA) for motorbike deliveries in Nairobi (As team-10-cpt-explorers : Ranked 7th)</CardText>
            <CardActions border>
              <Button
                colored
                href="https://zindi.africa/hackathons/edsa-sendy-logistics-challenge/leaderboard"
              >
                Zindi leaderboard link
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
