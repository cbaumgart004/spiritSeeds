import React, { useEffect, useState, useRef } from 'react'
import { Container, Title, Text, Button } from '@mantine/core'
import classes from '@/assets/css/HeroImageRight.module.css'
import { Link } from 'react-router-dom'

const ServicesProvided = () => {
  const [scrollY, setScrollY] = useState(0)
  const [inView, setInView] = useState(false) // To track if 90% of the element is in view
  const [isVisible, setIsVisible] = useState(false) // Track when the element is fully visible
  const sectionRef = useRef(null) // Reference to the component

  // Handle scrolling behavior
  const handleScroll = () => {
    if (isVisible) {
      setScrollY(window.scrollY) // Update scrollY once the element is visible
    }
  }

  // Use IntersectionObserver to check if 90% of the element is in view
  useEffect(() => {
    const currentSectionRef = sectionRef.current // Capture the current value of sectionRef

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.9) {
          setInView(true) // Element is 90% in view
          setScrollY(0) // Reset scrollY to 0 immediately when 90% in view
          setIsVisible(false) // Ensure we start at 0 when it becomes fully visible
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

  // Add/remove scroll event listener based on element visibility
  useEffect(() => {
    const updateScroll = () => {
      if (inView) {
        setIsVisible(true) // Mark element as fully visible once the scroll starts
      }
    }

    if (inView) {
      window.addEventListener('scroll', handleScroll) // Start tracking scrollY when inView
      updateScroll()
    }

    // Cleanup the scroll listener when the component is out of view or unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [inView])

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
              transform: `translateY(${isVisible ? scrollY * -0.25 : 0}px)`, // Apply parallax once fully visible
              marginTop: '300px',
              transition: 'transform 0.2s ease-out', // Smooth transition to stop abrupt changes
            }}
          >
            <Title className={classes.title}>
              <span className={classes.gradientText}>Thai Herbal Compress</span>{' '}
            </Title>

            <Text className={classes.description} mt={30}>
              This add-on can be added to any session, Thai Herbal Compresses
              are balls of herbs wrapped in muslin and heated then applied to
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

export default ServicesProvided
