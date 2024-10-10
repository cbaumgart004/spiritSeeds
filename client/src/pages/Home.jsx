/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Music from '../components/Music'
import Services from '../components/Services'
import About from '../components/About'
import Values from '../components/Values'

const Home = () => {
  const [scrollY, setScrollY] = useState(0)

  // Scroll handler to update the scrollY position
  const handleScroll = () => {
    setScrollY(window.scrollY || window.pageYOffset)
  }

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll)

    // Clean up the scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      {/* Pass scrollY as a prop to each component */}
      <Services scrollY={scrollY} />
      <About scrollY={scrollY} />
      <Values scrollY={scrollY} />
      <Music scrollY={scrollY} />
    </div>
  )
}

export default Home
