import React, { useEffect, useState } from 'react';

import { Container, Title, Text, Image, Button, } from '@mantine/core';
import classes from '@/assets/css/HeroImageRight.module.css';
const About = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
        <div
          className={classes.root}
          style={{
            backgroundImage: `url('../assets/images/About.JPG')` ,
            backgroundSize: 'cover', // Ensures the image covers the whole div
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat', // Prevent repeating
            position: 'relative', // To contain absolutely positioned elements
          }}
        >
          <Container size="lg">
            <div className={classes.inner}>
              <div 
                className={classes.content}
                style={{ 
                  transform: `translateY(${scrollY * -0.25}px)`, // Gives the content a parallax effect per M's request
                  marginTop: '200px', // Add margin at the top
                }}
              >
                <Title className={classes.title}>
                  About{' '}
                  <span className={classes.gradientText}>
                  Spirit Seeds Wellness
                  </span>{' '}
                  
                </Title>
      
                <Text className={classes.description} mt={30}>
                  Find Out More About Us
                </Text>
      
                <Button
                  variant="gradient"
                  size="xl"
                  className={classes.control}
                  mt={40}
                >
                  Learn More
                </Button>
                
              </div>
            </div>
          </Container>
        </div>
      );
};

export default About;