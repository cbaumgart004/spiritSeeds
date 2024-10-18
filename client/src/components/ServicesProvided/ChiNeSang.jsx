/* eslint-disable no-unused-vars */
import React from 'react'
import { Container, Title, Text, Button } from '@mantine/core'
import classes from '@/assets/css/HeroImageRight.module.css'
import { Link } from 'react-router-dom'

const ChiNeSang = ({ scrollY }) => {
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url('../assets/images/SoundHealing.JPG')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        position: 'relative',
        overflow: 'hidden', // Ensure content stays within its container
      }}
    >
      <Container size="lg">
        <div className={classes.inner}>
          <div
            className={classes.content}
            style={{
              transform: `translateY(${scrollY * -0.25}px)`, // Apply parallax effect
              marginTop: '300px',
              transition: 'transform 0.2s ease-out', // Smooth transition for parallax
            }}
          >
            <Title className={classes.title}>
              <span className={classes.gradientText}>Chi Ne Sang</span>
            </Title>

            <Text className={classes.description} mt={30}>
              Abdominal detox massage based on Chinese meridian theory, works
              the fascia and pressure points of the belly to aid in full
              function of the organs and connective tissues of the back and
              spine.
            </Text>
            <Link to="/">
              <Button
                variant="gradient"
                size="xl"
                className={classes.control}
                mt={40}
              >
                Home
              </Button>
            </Link>
            <Link to="/BookService">
              <Button
                variant="gradient"
                size="xl"
                className={classes.control}
                mt={40}
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ChiNeSang
