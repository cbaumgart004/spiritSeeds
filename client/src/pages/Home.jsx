// Home.js

import React from 'react';
import Music from '../components/Music';
import Services from '../components/Services';
import About from '../components/About';
import Values from '../components/Values';
const Home = () => {
    return (
        <div>
            <Services />
            <About />
            <Values />
            <Music />
        </div>
    );
};

export default Home;