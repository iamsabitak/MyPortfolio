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
        <ProjectsImg
          src="https://www.shutterstock.com/image-vector/weather-forecast-app-interface-vector-260nw-2045868041.jpg"
          projectTitle="ForeCastify"
          text="A simple weather application built with React that enables users to check the weather forecast for specific locations."
          link="https://659531ff0f70d883df99e866--tranquil-halva-ce5a42.netlify.app"
        />
        <ProjectsImg
          src="https://play-lh.googleusercontent.com/KBwBNsVwGz2zyfe0Dqrkzmtf7OCJ7QQuK0kPuOOwxXTv23pBh34CMr_eDj03eGdQr0A"
          projectTitle="Eat-n-split"
          text="React-powered Eat and Split app: Easily split bills, track expenses, and manage shared costs effortlessly with friends."
          link="https://zingy-arithmetic-fbd779.netlify.app/?"
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
