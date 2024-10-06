/* eslint-disable no-unused-vars */

import React from 'react'

import Auth from '../../utils/auth'
import { Link } from 'react-router-dom'

const Nav = () => {
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
            <Link to="/merch">Merch</Link>
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
            <Link to="/Merch">Merch</Link>
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

        <nav>{showNavigation()}</nav>
      </div>
    </header>
  )
}

export default Nav
