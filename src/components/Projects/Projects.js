import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import music from "../../Assets/music-streaming.png";
import bikes from "../../Assets/Divvy-bikes.jpg";
import emoion from "../../Assets/emoion.png";
import life from "../../Assets/life-expectancy.jpeg";
import movie from "../../Assets/movie-review.avif";
import motion from "../../Assets/motion-sensor.jpeg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music-streaming-ETL"
              description="This project focuses on constructing a data warehousing solution for a hypothetical music streaming service. Using Apache Spark with Python (PySpark), the project aims to optimize the speed and efficiency of Extract, Transform, Load (ETL) processes while leveraging cloud-based infrastructure for cost-effective scaling."
              ghLink="${githubProfile}/Music-streaming-ETL"
             // demoLink="${githubProfile}/Music-streaming-ETL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bikes}
              isBlog={false}
              title="Divvy-Bikeshare-Data-warehousing"
              description="This is an end to end data engineering project, This project uses Chicago's Divvy bikeshare dataset, Divvy is the bicycle sharing system in the Chicago metropolitan area, currently serving the cities of Chicago and Evanston. The system is owned by the Chicago Department of Transportation and has been operated by Lyft since 2019."
              ghLink="${githubProfile}/Divvy-Bikeshare-Data-warehousing"
            //  demoLink="${githubProfile}/Divvy-Bikeshare-Data-warehousing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emoion}
              isBlog={false}
              title="Facial Recognition and Emotion Detection"
              description="This project develops a facial emotion recognition system that detects human emotions from images, enhancing computer-human interactions. It's particularly useful in interactive gaming, customer service, and security by enabling computers to interpret non-verbal communication."
              ghLink="${githubProfile}/facenemotion"
            //  demoLink="${githubProfile}/facenemotion"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={life}
              isBlog={false}
              title="Investing in Health, Investing in Life"
              description="This project examines global life expectancy trends from 2000 to 2015, analyzing data from the WHO and UN to identify how factors like GDP, vaccination rates, and education affect life expectancy in 193 countries. Statistical analyses reveal key predictors and emphasize the importance of integrated public health strategies for enhancing life expectancy globally, providing critical insights for policymakers."
              ghLink="${githubProfile}/Life-Expectancy-and-Socioeconomic-Health-Investments-"
             // demoLink="${githubProfile}/Life-Expectancy-and-Socioeconomic-Health-Investments-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="MovieHub"
              description= "This website provides comprehensive details about movies, including information about the cast, user and critic reviews, and IMDb ratings. It serves as a one-stop platform for movie enthusiasts to explore everything from plot summaries to in-depth analyses and viewer feedback."
              ghLink="https://github.com/sumukhSR3/movieshub"
             // demoLink="https://github.com/sumukhSR3/movieshub"
             />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motion}
              isBlog={false}
              title="Motion Sensor"
              description="This project is a motion-activated video camera implemented using OpenCV-Python, designed to monitor and record activity based on movement detection. It continuously displays the camera feed along with two grayscale 'delta' feeds that highlight motion intensity. When movement is detected for a set number of consecutive frames, the system saves the video feeds to timestamped folders. The program can be safely exited by pressing the escape key."
              ghLink="https://github.com/sumukhSR3/Motion_sensor"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
