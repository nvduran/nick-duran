import React, { useEffect } from 'react';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../utils/helpers.js';


function Navi(props) {
    return (
        
            <Navbar expand="sm" variant="light" bg="light" className="navBar">
                {/* <Navbar.Brand href="#">Nick Duran</Navbar.Brand> */}
                <Nav className="top-nav">
                    <Nav.Link href="#home"><h3 className="navLink" style={{ paddingRight: '10px' }}>Projects</h3></Nav.Link>
                    <Nav.Link href="#features"><h3 className="navLink" style={{ paddingRight: '10px' }}>About</h3></Nav.Link>
                    <Nav.Link href="#pricing"><h3 className="navLink" style={{ paddingRight: '10px' }}>Contact</h3></Nav.Link>
                </Nav>
            </Navbar>
        
    );
}

export default Navi;