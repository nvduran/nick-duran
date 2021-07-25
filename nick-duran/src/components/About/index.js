import React from 'react'
import { Container, Button, Navbar, Nav, Row, Col } from 'react-bootstrap';
import headshot from '../../assets/headshot.jpg'

function About(props) {
  return (
    <Container fluid className="about-section">
      <div id="about" style={{fontSize:'3em', padding:'2%'}}>About Me</div>
      <Row>
        <Col><img src={headshot} class="img-fluid" alt="Responsive image" /></Col>
        <Col>
          <h1>Web Developer</h1>
          <p>Located in Austin, TX</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
