import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    // const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <div>
            <Nav
                // categories={categories}
                // setCurrentCategory={setCurrentCategory}
                // currentCategory={currentCategory}
            ></Nav>
            <main>
                {/* <div>
                    <Gallery></Gallery>
                    <About></About>
                </div> */}
            </main>
        </div>
    );
}

export default App;