import React, {useEffect, useState} from 'react';

import { Container, Title, Text, Image, Button } from '@mantine/core';
import classes from '@/assets/css/HeroImageRight.module.css';

const Values = () => {
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
            backgroundImage: `url('../assets/images/Values.JPG')` ,
            backgroundSize: 'cover', // Ensures the image covers the whole div
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat', // Prevent repeating
            position: 'relative', // To contain absolutely positioned elements
          }}
        >
          <Container size="lg" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
  <div className={classes.inner} style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
    <div 
      className={classes.content}
      style={{ 
        transform: `translateY(${scrollY * -0.25}px)`, // Gives the content a parallax effect
        marginTop: '400px', // Adjust as needed
      }}
    >
                
                <Title className={classes.title}>
                 
                  A{' '}
                  <Text
                    component="span"
                    style={{ color: 'gray' }}
                    inherit
                    variant="gradient"
                    gradient={{ from: 'pink', to: 'yellow' }}
                  >
                    fully featured
                  </Text>{' '}
                  <span style={{ color: 'gray' }}>About Spirit Seeds Wellness</span>
                </Title>
      
                <Text className={classes.description} mt={30}>
                  Find Out More About Us
                </Text>
      
                <Button
                  variant="gradient"
                  gradient={{ from: 'pink', to: 'yellow' }}
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

export default Values;