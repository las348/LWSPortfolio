import React from "react";
import "./about.css"
import Laureni from "../../../images/laureni.jpg"
import NYU from "../../../images/nyu.png"
import Rutgers from "../../../images/rutgers.png"
import { Card } from 'react-bootstrap'

const About = () => (
  <div className="container">
    <div className="row">
      <div className="col-md">
        <Card.Img variant="top" src={Laureni} className="Laureni" />
        <Card.Body>
          <h2>About Me</h2>
          <p>Hello! My name is Laureni. I’m a Full Stack Developer seeking a new challenging
          career. My years of experience in sales and marketing taught me how to listen to client's needs and project
          management; I'm looking to leverage these skills for my next role. I am a hardworking individual passionate
          about approaching programming challenges from different angles and I am always eager to learn new skills and
            advance my knowledge base. </p>
          <p>I've worked on solo projects integrating responsive web design practices and in a
          group incorporating various APIs. I’m completing Rutger's Full Stack Bootcamp, curriculum includes the
          following technologies:
            <li> Browser Based Technologies (HTML, CSS, JavaScript, jQuery, Bootstrap)</li>
            <li> Databases (MySQL, MongoDB)</li>
            <li> Server Side Development (Node.js, Express, MERN Stack)</li>
          </p>
          <p>
            In my personal time I like to bake, ride my bike, and play Animal Crossing. Also, I have a BA in Italian
            literature from New York Univeristy so I love practicing my Italian whenever I can.
          </p>
          <center>
            <Card.Img variant="top" src={NYU} id="NYU" />
            <Card.Img variant="top" src={Rutgers} id="Rutgers" />
          </center>
        </Card.Body>
      </div>
    </div>
  </div>
);

export default About;
