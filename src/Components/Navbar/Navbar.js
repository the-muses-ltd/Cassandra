import React from "react";

import "./Navbar.css";

const Navbar = () => (
  <nav className="Navbar">
    <a className="Navbar-headline" href="/">
      Cassandra
    </a>
    <ul className="Navbar-links">
      <li className="Navbar-link">
        <a href="#">Courses</a>
      </li>
      <li className="Navbar-link">
        <a href="#">Online Recourses</a>
      </li>
      <li className="Navbar-link">
        <a href="#">About</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
