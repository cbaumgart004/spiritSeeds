/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Title, Text, Button } from '@mantine/core'
import classes from '@/assets/css/HeroImageRight.module.css'
const About = ({ scrollY }) => {
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url('../assets/images/About.JPG')`,
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
            <Link to="/about">
              <Button
                variant="gradient"
                size="xl"
                className={classes.control}
                mt={40}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
