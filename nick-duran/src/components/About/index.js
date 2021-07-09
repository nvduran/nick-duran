import React from 'react'
import { Container, Button, Navbar, Nav, Row, Col } from 'react-bootstrap';
import headshot from '../../assets/headshot.jpg'

function About(props) {
  return (
    <Container fluid className="about-section">
      <div className="section-header">About Me</div>
      <Row>
        <Col><img src={headshot} class="img-fluid" alt="Responsive image" /></Col>
        <Col>
          <h1>Web Developer</h1>
          <p>Austin, TX</p>
        </Col>
      </Row>

    </Container>
  );
}

export default About;
