/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import { Burger, Popover } from '@mantine/core'
import Auth from '../../utils/auth'
import { Link } from 'react-router-dom'
import classes from '@/assets/css/HeroImageRight.module.css'
const Nav = () => {
  const [opened, setOpened] = useState(false) // Track popover open/close state

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav-links">
          <li className={`mx-1 ${classes.control}`}>
            <Link to="/services">Services</Link>
          </li>
          <li className={`mx-1 ${classes.control}`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`mx-1 ${classes.control}`}>
            <Link to="/values">Values</Link>
          </li>
          <li className={`mx-1 ${classes.control}`}>
            <Link to="/merch">Store</Link>
          </li>
          <li className={`mx-1 ${classes.control}`}>
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className={`mx-1 ${classes.control}`}>
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      )
    } else {
      return (
        <ul className="nav-links">
          <li className={`mx-1 ${classes.control}`}>
            <Link to="/services">Services</Link>
          </li>
          <li className={`mx-1 ${classes.control}`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`mx-1 ${classes.control}`}>
            <Link to="/values">Values</Link>
          </li>
          <li className={`mx-1 ${classes.control}`}>
            <Link to="/merch">Store</Link>
          </li>
          <li className={`mx-1 ${classes.control}`}>
            <Link to="/signup">Signup</Link>
          </li>
          <li className={`mx-1 ${classes.control}`}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )
    }
  }

  return (
    <header className="background-header">
      <div className="overlay">
        <h1 className="site-title">
          <Link to="/">Home</Link>
        </h1>

        {/* Burger button wrapped inside the Popover.Target */}
        <Popover
          opened={opened}
          onClose={() => setOpened(false)} // Close popover when onClose is triggered
          position="bottom" // Popover appears below the burger button
          withArrow={false} // Remove arrow from the popover
          placement="start" // Adjust placement if needed
        >
          <Popover.Target>
            <Burger
              color="white"
              size="md"
              variant="solid"
              className="burger-icon"
              style={{ position: 'relative', zIndex: 3 }}
              onClick={() => setOpened((o) => !o)} // Toggle popover
              opened={opened}
              ripple="light"
            />
          </Popover.Target>

          <Popover.Dropdown
            style={{
              backgroundColor: 'rgba(44, 62, 80, 0)',
              color: 'white',
              border: 'none',
              padding: '10px',
            }}
          >
            {showNavigation()}
          </Popover.Dropdown>
        </Popover>
      </div>
    </header>
  )
}

export default Nav
