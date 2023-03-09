import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/25231.png";
import navIcon3 from "../assets/img/twiter.png";
import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">         
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/angel-muro-037b4524a/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/angelmuro" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.twitter.com/AngelGa93993994" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Diseñado y programado por Angel Muro </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
