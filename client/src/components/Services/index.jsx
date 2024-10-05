import React from 'react';
import '@mantine/core/styles/ColorPicker.css';
import { Container, Title, Text, Button } from '@mantine/core';

import classes from '@/assets/css/HeroImageRight.module.css';
const Services = () => {
    return (
        <div
          className={classes.root}
          style={{
            backgroundImage: `url('../assets/images/SoundHealing.JPG')` ,
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
                  Spirit Seeds Wellness services
                </Title>
      
                <Text className={classes.description} mt={30}>
                  At Spirit Seeds Wellness, we provide a number of massage, yoga, and sound healing services
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

export default Services;