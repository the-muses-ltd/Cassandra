import React from "react";

import "./Navbar.css";

const Navbar = () => (
  <nav className="Navbar">
    <a className="Navbar-headline" href="/">
      Cassandra
    </a>
    <ul className="Navbar-links">
      <li className="Navbar-link">
        <a href="/courses">Courses</a>
      </li>
      <li className="Navbar-link">
        <a href="/resources">Online Resources</a>
      </li>
      <li className="Navbar-link">
        <a href="/about">About</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
