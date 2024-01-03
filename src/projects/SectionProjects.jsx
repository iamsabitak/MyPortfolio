import React from "react";

function SectionProjects({ ProjectsImg }) {
  // const src =
  //   "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210712212601/Top-10-Front-End-Web-Development-Projects-for-Beginners.png";
  // const projectTitle = "Project";
  // const text =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam voluptatum velit? Illo ullam consectetur beatae ea commodi earum ab!";
  return (
    <div className="container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {/* <ProjectsImg
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210712212601/Top-10-Front-End-Web-Development-Projects-for-Beginners.png"
          projectTitle="UsePopCorn"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam voluptatum velit? Illo ullam consectetur beatae ea commodi earum ab!"
          link="https://usepopcorrrn.netlify.app"
        /> */}
        <ProjectsImg
          src="https://www.shutterstock.com/image-vector/weather-forecast-app-interface-vector-260nw-2045868041.jpg"
          projectTitle="ForeCastify"
          text="A simple weather application built with React that enables users to check the weather forecast for specific locations."
          link="https://659531ff0f70d883df99e866--tranquil-halva-ce5a42.netlify.app"
        />
      </div>
    </div>
  );
}

export default SectionProjects;
