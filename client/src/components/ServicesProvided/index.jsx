import React, { useEffect, useState } from 'react'
import Abhyanga from './Abhyanga'
import ChiNeSang from './ChiNeSang'
import IntegrativeHealing from './IntegrativeHealing'
import ThaiCompress from './ThaiCompress'

const ServicesProvided = () => {
  const [scrollY, setScrollY] = useState(0)

  // Handle scroll event to update the scroll position
  const handleScroll = () => {
    const windowScrollY = window.scrollY || window.pageYOffset
    setScrollY(windowScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll) // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll) // Cleanup event listener on unmount
    }
  }, [])

  return (
    <div>
      {/* Pass the scrollY prop to each child component */}
      <IntegrativeHealing scrollY={scrollY} />
      <Abhyanga scrollY={scrollY} />
      <ChiNeSang scrollY={scrollY} />
      <ThaiCompress scrollY={scrollY} />
    </div>
  )
}

export default ServicesProvided
