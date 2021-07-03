import React, { useEffect } from 'react';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../utils/helpers.js';


function Navi(props) {
    return (
        
            <Navbar expand="sm" variant="light" bg="light" className="navBar">
                <Navbar.Brand href="#">Nick Duran</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home">Projects</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Find Me</Nav.Link>
                </Nav>
            </Navbar>
        
    );
}

export default Navi;