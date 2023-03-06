import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Poke Api",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "Go to site",
      href: "https://whimsical-cendol-a24bbc.netlify.app",
    },
    {
      title: "Ecommerce",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "Go to site",
      href: "https://extraordinary-fox-0f521e.netlify.app",
    },
    {
      title: "Weather App",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "Go to site",
      href: "https://imaginative-lokum-f60694.netlify.app",
    },
    {
      title: "Rick And Morty",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "Go to site",
      href: "https://search-rickandmorty.netlify.app",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <br />
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
