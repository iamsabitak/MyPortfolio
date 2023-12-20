import React from "react";

import "./index.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
