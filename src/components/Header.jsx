import React from "react";
import "../index.css";

import { Link } from "react-router-dom";
import Navbar from "../header/Navbar";

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
