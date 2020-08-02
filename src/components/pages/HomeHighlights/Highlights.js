import React from 'react'
import { CardDeck, Card } from 'react-bootstrap'
import "./highlight.css"
import movie from "../../../images/movie.png"
import recipes from "../../../images/recipes.PNG"
import weather from "../../../images/Weather.PNG"
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


const renderTooltip = props => (
  <Tooltip {...props}>Deployed site</Tooltip>
);


const Highlight = () => (

      <div>
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
                <a href="https://github.com/las348/moviegoat" target="_blank" className="link" rel="noopener noreferrer">
                <i class="fa fa-github-square fa-2x"></i></a>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
                <a href="https://safe-earth-58672.herokuapp.com/" target="_blank" className="link" rel="noopener noreferrer">
                <i className="fa fa-window-restore fa-2x"></i></a>
                </OverlayTrigger>
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
                <a href="https://github.com/las348/Glova" target="_blank" className="link" rel="noopener noreferrer">
                <i className="fa fa-github-square fa-2x"></i></a>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
                <a href="https://las348.github.io/Glova/" target="_blank" className="link" rel="noopener noreferrer">
                <i className="fa fa-window-restore fa-2x"></i></a>
                </OverlayTrigger>
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
                <a href="https://github.com/las348/APICons" target="_blank" className="link" rel="noopener noreferrer">
                <i className="fa fa-github-square fa-2x"></i></a>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
                <a href="https://las348.github.io/APICons/" target="_blank" className="link" rel="noopener noreferrer">
                <i className="fa fa-window-restore fa-2x"></i></a>
                </OverlayTrigger>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
        </div>
      </div>
    )

export default Highlight;