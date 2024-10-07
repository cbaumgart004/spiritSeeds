/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import { Container, Title, Text, Button } from '@mantine/core'
import classes from '@/assets/css/HeroImageRight.module.css'
import { Link } from 'react-router-dom'

const ServicesProvided = () => {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url('../assets/images/SoundHealing.JPG')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        position: 'relative', // To contain absolutely positioned elements
      }}
    >
      <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
        <div className={classes.inner}>
          <div
            className={classes.content}
            style={{
              transform: `translateY(${scrollY * -0.25}px)`, // Gives the content a parallax effect per M's request
              marginTop: '300px', // Add margin at the top
            }}
          >
            <Title className={classes.title}>
              <span className={classes.gradientText}>
                Spirit Seeds Wellness
              </span>{' '}
              Services
            </Title>

            <Text className={classes.description} mt={30}>
              At Spirit Seeds Wellness, we provide a number of massage, yoga,
              and sound healing services
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

export default ServicesProvided
