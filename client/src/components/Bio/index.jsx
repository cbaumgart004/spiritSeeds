import React from 'react';

import { Container, Title, Text, Image, Button, } from '@mantine/core';
import classes from '@/assets/css/HeroImageRight.module.css';
const Bio = () => {
    return (
        <div
          className={classes.root}
          style={{
            backgroundImage: `url('../assets/images/Bio.JPG')` ,
            backgroundSize: 'cover', // Ensures the image covers the whole div
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat', // Prevent repeating
          }}
        >
          <Container size="lg">
            <div className={classes.inner}>
              <div className={classes.content}>
                <Title className={classes.title}>
                  A{' '}
                  <Text
                    component="span"
                    inherit
                    variant="gradient"
                    gradient={{ from: 'pink', to: 'yellow' }}
                  >
                    fully featured
                  </Text>{' '}
                  React components library
                </Title>
      
                <Text className={classes.description} mt={30}>
                  Build fully functional accessible web applications with ease – Mantine includes more
                  than 100 customizable components and hooks to cover you in any situation
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
                <Button
                  variant="gradient"
                  gradient={{ from: 'pink', to: 'yellow' }}
                  size="xl"
                  className={classes.control}
                  mt={40}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </Container>
        </div>
      );
};

export default Bio;