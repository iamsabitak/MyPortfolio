import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Sabita's Portfolio
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
