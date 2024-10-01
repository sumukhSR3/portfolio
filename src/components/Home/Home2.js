import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import SC from "../../Assets/SC.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm Sumukh, a professional data analyst. I am a data wizard with a knack for building innovative solutions by leveraging data. My expertise spans cloud computing, data engineering, data analytics, and machine learning. This versatile skill set allows me to seamlessly integrate and manage data pipelines, analyze complex datasets, and develop predictive models. Proficient in R and Python, I utilize tools like pandas for data manipulation, numpy for numerical computations, Torch for deep learning models, and VS Code for seamless development.
              <br />
              <br />What excites me most is the interconnected nature of these fields—how cloud computing enables scalable data storage and processing, data engineering ensures robust data pipelines, data analytics uncovers actionable insights, and machine learning drives predictive power. My passion lies in exploring these intersections to unlock the full potential of data.
              
              
             
              <br />
              <br/>I thrive in collaborative environments, driving impactful insights and decisions. My strong ethical foundation ensures integrity in all my work. I invite you to join me in this data journey, where curiosity and innovation lead to transformative solutions. Thank you!
            
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={SC} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              
              <li className="social-icons">
                <a
                  href="https://github.com/sumukhSR3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sumukh-ramagiri3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:sumukhsr3@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
