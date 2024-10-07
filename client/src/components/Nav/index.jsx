/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import { Burger, Popover, ScrollArea, Button } from '@mantine/core'
import Auth from '../../utils/auth'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [opened, setOpened] = useState(false)
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav-links">
          {/* <li className="mx-1">
            <Link to="/Home">Home</Link>
          </li>
          <li className="mx-1">
            <Link to="/Calendar">Calendar</Link>
          </li> */}
          <li className="mx-1">
            <Link to="/services">Services</Link>
          </li>
          <li className="mx-1">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-1">
            <Link to="/values">Values</Link>
          </li>
          <li className="mx-1">
            <Link to="/merch">Store</Link>
          </li>
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      )
    } else {
      return (
        <ul className="nav-links">
          {/* <li className="mx-1">
          <Link to="/Home">Home</Link>
        </li>
        <li className="mx-1">
          <Link to="/Calendar">Calendar</Link>
        </li> */}
          <li className="mx-1">
            <Link to="/services">Services</Link>
          </li>
          <li className="mx-1">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-1">
            <Link to="/values">Values</Link>
          </li>
          <li className="mx-1">
            <Link to="/Merch">Store</Link>
          </li>
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
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
        <Burger
          color="white"
          size="md"
          variant="solid"
          className="burger-icon"
          onClick={() => setOpened((o) => !o)}
          opened={opened}
          ripple="light"
        />
        &#9776; {/* This represents the hamburger icon */}
        <Popover
          opened={opened}
          onClose={() => setOpened(false)}
          position="bottom" // Position the popover below the burger icon
          overlayProps={{ backgroundOpacity: 0.5, blur: 1 }}
          contentProps={{ padding: 20, borderRadius: 5 }}
        >
          <Popover.Target>
            <Button
              onClick={() => setOpened((o) => !o)}
              className="open-popover-button"
              style={{ display: 'none' }} // Hide the button; we use the hamburger for opening
            >
              Open Menu
            </Button>
          </Popover.Target>
          <Popover.Dropdown
            style={{
              backgroundColor: '#2c3e50', // Custom background color for the popover
              color: 'white',
              borderRadius: '10px',
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
