/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import { Container, Title, Text, Button } from '@mantine/core'
import classes from '@/assets/css/HeroImageRight.module.css'
import { Link } from 'react-router-dom'

const ServicesProvided = () => {
  const [scrollY, setScrollY] = useState(0)
  const [inView, setInView] = useState(false) // Track if 90% of the element is in view
  const sectionRef = useRef(null) // Reference to the component
  const initialScrollY = useRef(0) // Reference to store the initial scroll position

  // Handle scrolling behavior
  const handleScroll = () => {
    if (inView) {
      setScrollY(window.scrollY - initialScrollY.current) // Adjust scroll based on the initial position
    }
  }

  // Use IntersectionObserver to check if 90% of the element is in view
  useEffect(() => {
    const currentSectionRef = sectionRef.current // Capture the current value of sectionRef

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.9) {
          setInView(true) // Element is 90% in view
          initialScrollY.current = window.scrollY // Store the current scroll position as the initial position
          setScrollY(0) // Reset scrollY to 0 to ensure we start from the root position
        } else {
          setInView(false) // Element is less than 90% in view
        }
      },
      {
        root: null, // Use the viewport as root
        threshold: 0.9, // 90% of the element must be visible
      }
    )

    if (currentSectionRef) {
      observer.observe(currentSectionRef)
    }

    // Cleanup observer on unmount
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef)
      }
    }
  }, [])

  // Add the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll) // Start tracking scrollY when the component mounts

    // Cleanup the scroll listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      ref={sectionRef} // Attach ref to the element
      className={classes.root}
      style={{
        backgroundImage: `url('../assets/images/SoundHealing.JPG')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        position: 'relative',
      }}
    >
      <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
        <div className={classes.inner}>
          <div
            className={classes.content}
            style={{
              transform: `translateY(${inView ? scrollY * -0.25 : 0}px)`, // Apply parallax effect only if in view
              marginTop: '300px', // Add margin at the top
              transition: 'transform 0.2s ease-out', // Smooth transition for parallax
            }}
          >
            <Title className={classes.title}>
              <span className={classes.gradientText}>Chi Ne Sang</span>{' '}
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

export default ServicesProvided
