import React from "react";

function SectionProjects({ ProjectsImg }) {
  return (
    <div className="container">
      <h2>Projects</h2>
      <p className="projects-description">
    Explore some of my recent projects showcasing a range of skills in web development. From weather applications to bill-splitting and movie recommendations, each project reflects my commitment to creating user-friendly and innovative solutions using React.
  </p>
      <div className="projects-grid">
        <ProjectsImg
          src="https://www.shutterstock.com/image-vector/weather-forecast-app-interface-vector-260nw-2045868041.jpg"
          projectTitle="ForeCastify"
          text="A simple weather application built with React that enables users to check the weather forecast for specific locations."
          link="https://659531ff0f70d883df99e866--tranquil-halva-ce5a42.netlify.app"
        />
        
        <ProjectsImg
          src="https://play-lh.googleusercontent.com/z1fvpjvMPAMuJHssHp-SZ8ig7bKhYYlEWxKNFQJ1zvRGom5mc83Yb2sWKQXJ7cWxGBo=w240-h480-rw"
          projectTitle="FlickPicks"
          text="Discover films matching your taste with FlickPicks, a React app for movie recommendations, details, and saving favorites."
          link="https://6596cebd993dc500728433ac--endearing-snickerdoodle-21afbe.netlify.app"
        />
      </div>
    </div>
  );
}

export default SectionProjects;
