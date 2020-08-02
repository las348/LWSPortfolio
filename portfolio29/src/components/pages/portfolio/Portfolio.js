import React from 'react'
import { CardDeck, Card } from 'react-bootstrap'
import "./portfolio.css"
import movie from "../../../images/movie.png"
import recipes from "../../../images/recipes.PNG"
import weather from "../../../images/Weather.PNG"
import Footer from "../Footer/footer"
import burger from "../../../images/burger.PNG"
import planner from "../../../images/Planner.PNG"
import trivia from "../../../images/trivia.PNG"

const Portfolio = () => (
  <div>
    <div className="container portfolio">
      <div className="header">
        <h2>Projects</h2>
      </div>
    </div>

    <div className="row highlights">
      <div className="col-md">
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={movie} />
            <Card.Body>
              <Card.Title>Movie GOAT</Card.Title>
              <Card.Text>
                Movie review website that allows users to add, view and delete reviews.
                  <p>JQuery, Node.js, MySQL</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://github.com/las348/moviegoat" target="_blank" class="link" rel="noopener noreferrer">
                <i class="fa fa-github-square fa-2x"></i></a>
              <a href="https://safe-earth-58672.herokuapp.com/" target="_blank" class="link" rel="noopener noreferrer">
                <i class="fa fa-window-restore fa-2x"></i></a>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={recipes} />
            <Card.Body>
              <Card.Title>Recipe Lookup</Card.Title>
              <Card.Text>
                User may search for recipe and receive results from Edamam & Youtube APIs.
                  <p>HTML, CSS, JavaScript</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://github.com/las348/Glova" target="_blank" class="link" rel="noopener noreferrer">
                <i class="fa fa-github-square fa-2x"></i></a>
              <a href="https://las348.github.io/Glova/" target="_blank" class="link" rel="noopener noreferrer">
                <i class="fa fa-window-restore fa-2x"></i></a>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={weather} />
            <Card.Body>
              <Card.Title>Weather Forecast</Card.Title>
              <Card.Text>
                With the help of OneWeather API user may search by city for current & forecasted weather report.
                  <p>HTML, CSS, JavaScript</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://github.com/las348/APICons" target="_blank" class="link" rel="noopener noreferrer">
                <i class="fa fa-github-square fa-2x"></i></a>
              <a href="https://las348.github.io/APICons/" target="_blank" class="link" rel="noopener noreferrer">
                <i class="fa fa-window-restore fa-2x"></i></a>
            </Card.Footer>
          </Card>
          </CardDeck>

          <CardDeck className="secRow">
          <Card>
            <Card.Img variant="top" src={burger} />
            <Card.Body>
              <Card.Title>Burger App</Card.Title>
              <Card.Text>
              Restaurant app where you can create, devour, and delete a burger.
                  <p>MySQL, NodeJS, Express, ORM, and Heroku.</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://github.com/las348/Burger" target="_blank" class="link" rel="noopener noreferrer">
                <i class="fa fa-github-square fa-2x"></i></a>
              <a href="https://evening-lake-90391.herokuapp.com/" target="_blank" class="link" rel="noopener noreferrer">
                <i class="fa fa-window-restore fa-2x"></i></a>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={planner} />
            <Card.Body>
              <Card.Title>Daily Planner</Card.Title>
              <Card.Text>
              Allows the user to save events for each hour of the work day. 
                  <p>Uses moment.js library and local storage.</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://github.com/las348/Audify" target="_blank" class="link" rel="noopener noreferrer">
                <i class="fa fa-github-square fa-2x"></i></a>
              <a href="https://las348.github.io/Audify/" target="_blank" class="link" rel="noopener noreferrer">
                <i class="fa fa-window-restore fa-2x"></i></a>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={trivia} />
            <Card.Body>
              <Card.Title>The Office Quiz</Card.Title>
              <Card.Text>
              How well do you know The Office? test your knowledge with this timed quiz that keeps track of high scores.
                  <p>HTML, CSS, JavaScript, Local Storage</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://github.com/las348/Nion" target="_blank" class="link" rel="noopener noreferrer">
                <i class="fa fa-github-square fa-2x"></i></a>
              <a href="https://las348.github.io/Nion/" target="_blank" class="link" rel="noopener noreferrer">
                <i class="fa fa-window-restore fa-2x"></i></a>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </div>
    <Footer />
  </div>

);

export default Portfolio;
