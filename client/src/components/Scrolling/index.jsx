// ScrollingTextOverlay.js
import React from 'react';
import './ScrollingTextOverlay.css'; // Import the CSS file

const ScrollingTextOverlay = () => {
    return (
        <div className="container">
            <img src="../assets/images/Bio.jpg" alt="Bio" className="background-image" />
            <div className="scrolling-text">
                Your scrolling text goes here!
            </div>
        </div>
    );
};

export default ScrollingTextOverlay;