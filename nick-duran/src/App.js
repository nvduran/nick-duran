import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Navi from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    // const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <div>
            <Navi
                // categories={categories}
                // setCurrentCategory={setCurrentCategory}
                // currentCategory={currentCategory}
            ></Navi>
            <main>
            <Gallery></Gallery>
                {/* <div>
                    
                    <About></About>
                </div> */}
            </main>
        </div>
    );
}

export default App;