import React from 'react'
import { Container, Button, Navbar, Nav, Row, Col } from 'react-bootstrap';

function About(props) {
    return (
      <Container>
          <div className="section-header">About Me</div>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }
  
  export default About;
