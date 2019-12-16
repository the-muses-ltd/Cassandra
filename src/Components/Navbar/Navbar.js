import React from "react";

import "./Navbar.css";

const Navbar = () => (
  <nav className="Navbar">
    {/* <a className="Navbar-headline" href="/">
      Cassandra
    </a> */}
    <a href="/">
      <img src="https://gdurl.com/Tuf2" className="navLogo" alt="logo" />
    </a>
    <ul className="Navbar-links">
      <li className="Navbar-link button">
        <a href="/resources">Learn</a>
      </li>
      <li className="Navbar-link button">
        <a href="/courses">Contribute</a>
      </li>
      <li className="Navbar-link button">
        <a href="/about">About</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
