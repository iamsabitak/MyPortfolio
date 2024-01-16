import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };
  const hideDropdown = () => {
    setIsActive(false);
  };
  return (
    <>
      <nav className="navbar" id="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div
        className={`toggle-btn ${isActive ? "active" : ""}`}
        onClick={toggleDropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
      <div className={`dropdown-btn ${isActive ? "active" : ""}`}>
        {/* Dropdown Links */}
        <Link to="/" onClick={hideDropdown}>Home</Link>
        <Link to="/about" onClick={hideDropdown}>About</Link>
        <Link to="/projects" onClick={hideDropdown}>Projects</Link>
        <Link to="/contact" onClick={hideDropdown}>Contact</Link>
      </div>
    </>
  );
}

export default Navbar;
