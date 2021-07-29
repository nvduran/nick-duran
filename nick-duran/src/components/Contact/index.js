import React from 'react'
import { Container, Button, Navbar, Nav, Row, Col } from 'react-bootstrap';

function Contact(props) {
    return (
      <Container fluid>
          <div style={{fontSize:'3em', padding:'2%', color: '#56649e'}} id="contact">Contact</div>
        <Row>
          <Col><a className="contact-link" href="https://github.com/nvduran">Github</a></Col>
          <Col><a className="contact-link" href="mailto:nvduran@gmail.com">nvduran@gmail.com</a></Col>
        </Row>
      </Container>
    );
  }
  
  export default Contact;