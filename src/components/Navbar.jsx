import React from "react";

import "../index.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
