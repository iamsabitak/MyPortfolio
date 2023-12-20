import React from "react";

import "./index.css";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project">
            <img
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210712212601/Top-10-Front-End-Web-Development-Projects-for-Beginners.png"
              alt="Project 1"
            />
            <div className="project-info">
              <h3>Project 1</h3>
              <p>Description of Project 1...</p>
            </div>
          </div>
          <div className="project">
            <img
              src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.png"
              alt="Project 2"
            />
            <div className="project-info">
              <h3>Project 2</h3>
              <p>Description of Project 2...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
