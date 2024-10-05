// Home.js

import React from 'react';
import Bio from '../components/Bio';
import Services from '../components/Services';
import About from '../components/About';
import Values from '../components/Values';
const Home = () => {
    return (
        <div>
            <Services />
            <About />
            <Values />
            <Bio />
        </div>
    );
};

export default Home;