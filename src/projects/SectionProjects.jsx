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
          src="https://miro.medium.com/v2/resize:fit:1400/1*lwyiHBfRgsLCDAz1e9TF2g.png"
          projectTitle="Eact-n-Split"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam voluptatum velit? Illo ullam consectetur beatae ea commodi earum ab!"
          link="https://zingy-arithmetic-fbd779.netlify.app"
        />
        <ProjectsImg
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210712212601/Top-10-Front-End-Web-Development-Projects-for-Beginners.png"
          projectTitle="UsePopCorn"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam voluptatum velit? Illo ullam consectetur beatae ea commodi earum ab!"
          link="https://usepopcorrrn.netlify.app"
        />
        <ProjectsImg
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210712212601/Top-10-Front-End-Web-Development-Projects-for-Beginners.png"
          projectTitle="Eact-n-Split"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam voluptatum velit? Illo ullam consectetur beatae ea commodi earum ab!"
          link="https://zingy-arithmetic-fbd779.netlify.app"
        />
        <ProjectsImg
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210712212601/Top-10-Front-End-Web-Development-Projects-for-Beginners.png"
          projectTitle="UsePopCorn"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam voluptatum velit? Illo ullam consectetur beatae ea commodi earum ab!"
          link="https://usepopcorrrn.netlify.app"
        />
        <ProjectsImg
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210712212601/Top-10-Front-End-Web-Development-Projects-for-Beginners.png"
          projectTitle="Eact-n-Split"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam voluptatum velit? Illo ullam consectetur beatae ea commodi earum ab!"
          link="https://zingy-arithmetic-fbd779.netlify.app"
        />
        <ProjectsImg
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210712212601/Top-10-Front-End-Web-Development-Projects-for-Beginners.png"
          projectTitle="UsePopCorn"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam voluptatum velit? Illo ullam consectetur beatae ea commodi earum ab!"
          link="https://usepopcorrrn.netlify.app"
        />{" "}
      </div>
    </div>
  );
}

export default SectionProjects;
