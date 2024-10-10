/* eslint-disable no-unused-vars */
import React from 'react'
import { Container, Title, Text, Button } from '@mantine/core'
import classes from '@/assets/css/HeroImageRight.module.css'
import { Link } from 'react-router-dom'

const ThaiCompress = ({ scrollY }) => {
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
              transform: `translateY(${scrollY * -0.25}px)`, // Apply dynamic parallax effect
              marginTop: '300px',
              transition: 'transform 0.2s ease-out', // Smooth transition for parallax
            }}
          >
            <Title className={classes.title}>
              <span className={classes.gradientText}>Thai Herbal Compress</span>
            </Title>

            <Text className={classes.description} mt={30}>
              This add-on can be added to any session. Thai Herbal Compresses
              are balls of herbs wrapped in muslin and heated, then applied to
              the body along acupressure points to promote healing.
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

export default ThaiCompress
