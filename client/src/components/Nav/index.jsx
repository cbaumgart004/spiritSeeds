/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Burger, Drawer, ScrollArea } from "@mantine/core";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Nav = () => {
  const [opened, setOpened] = useState(false);
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav-links">
          <li className="mx-1">
            <Link to="/Calendar">Book Services</Link>
          </li>
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
      );
    } else {
      return (
        <ul className="nav-links">
          <li className="mx-1">
            <Link to="/bookService">Book Now</Link>
          </li>
          <li className="mx-1">
            <Link to="/values">Values</Link>
          </li>
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
      );
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
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          padding="md"
          size="md"
          variant="transparent"
          position="right"
          radius="xl"
          overlayProps={{ backgroundOpacity: 0.5, blur: 1 }}
          closeButton={true}
        >
          <ScrollArea style={{ height: "calc(100vh - 60px)" }}>
            {showNavigation()}
          </ScrollArea>
        </Drawer>
      </div>
    </header>
  );
};

export default Nav;
