import React from "react";

import "../index.css";
import ProjectsImg from "../projects/ProjectsImg";
import SectionProjects from "../projects/SectionProjects";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <SectionProjects ProjectsImg={ProjectsImg} />
    </section>
  );
}

export default Projects;
