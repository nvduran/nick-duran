import React from 'react'
import { Container, Button, Navbar, Nav, Row, Col } from 'react-bootstrap';

function Contact(props) {
    return (
      <Container>
          <div className="section-header">Contact</div>
        <Row>
          <Col><a href="https://github.com/nvduran">Github</a></Col>
          <Col><a href="mailto:nvduran@gmail.com">nvduran@gmail.com</a></Col>
        </Row>
      </Container>
    );
  }
  
  export default Contact;