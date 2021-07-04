import React, { useEffect } from 'react';
import { Container, Button, Navbar, Nav, Row, Col, Carousel } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../utils/helpers.js';
import zing1 from '../../assets/zing/zing1.PNG'
import zhome from '../../assets/zing/home.PNG'
import zchat from '../../assets/zing/chat.PNG'
import ihome from '../../assets/iCamp/home.PNG'
import idir from '../../assets/iCamp/directions.PNG'

function Gallery(props) {
  return (

    <Container>
      <div className="section-header">Project Gallery</div>

      <Row>
        <Col><Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={zing1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={zhome}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={zchat}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel></Col>

      
        <Col><Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ihome}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={idir}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel></Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default Gallery;