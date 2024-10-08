import React, { useEffect, useState, useRef } from 'react'
import { Container, Title, Text, Button } from '@mantine/core'
import classes from '@/assets/css/HeroImageRight.module.css'
import { Link } from 'react-router-dom'

const ServicesProvided = () => {
  const [scrollY, setScrollY] = useState(0)
  const [inView, setInView] = useState(false) // To track if element is in view
  const sectionRef = useRef(null) // Reference to the component

  // Handle scrolling behavior
  const handleScroll = () => {
    if (inView) {
      setScrollY(window.scrollY)
    }
  }

  // Use IntersectionObserver to check if the element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        } else {
          setInView(false)
        }
      },
      {
        root: null, // Use the viewport
        threshold: 0.1, // 10% of the element must be visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Add/remove scroll event listener based on element visibility
  useEffect(() => {
    if (inView) {
      window.addEventListener('scroll', handleScroll)
    } else {
      window.removeEventListener('scroll', handleScroll)
    }

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
              transform: `translateY(${scrollY * -0.25}px)`, // Parallax effect
              marginTop: '300px',
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
