import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sumukh Ramagiri </span>
            from <span className="purple"> Plano, Texas ,USA</span>.
            <br />
            I'm a recent graduate with a Master's in Business Analytics from <span className="purple"> University of New Haven </span>.
            
            I am a skilled data analyst with three years of expertise in 
            <span className="purple"> data mining, analysis, and integration, building statistical and predictive models.</span>. 

           <br/>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
