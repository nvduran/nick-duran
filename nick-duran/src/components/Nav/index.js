import React, { useEffect, useState } from 'react';
import { Container, Button, Navbar, Nav, ButtonGroup } from 'react-bootstrap';
import { capitalizeFirstLetter, darkMode } from '../../utils/helpers.js';
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from 'use-dark-mode';

function Navi(props) {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const darkMode = useDarkMode(false);
    return (
        <Navbar expand="sm" className="navBar">
            {/* <Navbar.Brand href="#">Nick Duran</Navbar.Brand> */}
            <Nav className="top-nav">
                <Nav.Link href="#gallery"><h3 className="navLink" style={{ paddingRight: '10px' }}>Projects</h3></Nav.Link>
                <Nav.Link href="#about"><h3 className="navLink" style={{ paddingRight: '10px' }}>About</h3></Nav.Link>
                <Nav.Link href="#contact"><h3 className="navLink" style={{ paddingRight: '10px' }}>Contact</h3></Nav.Link>
                <DarkModeToggle
                    onChange={darkMode.toggle}
                    checked={darkMode.value}
                    size={50}
                />
            </Nav>
        </Navbar>

    );
}

export default Navi;