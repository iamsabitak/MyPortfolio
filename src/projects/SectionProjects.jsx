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
      <p className="projects-description">
        I've been working on various web projects using React. One helps
        organize travel items easily, another is a workout timer with cool
        features, and there's a simple weather app. I made a pizza-ordering app
        with real-time updates, a handy app for splitting bills with friends,
        and a fun movie recommendation app. These projects show I like making
        things that are easy to use and bring a bit of innovation to different
        areas
      </p>
      <div className="projects-grid">
        <ProjectsImg
          src="https://myluggage.io/img/icons/landing/luggage_monster2.png"
          projectTitle="Travel List"
          text="React Travel Packing List: Organize items by input, description, or packed status. Streamline travel preparation with ease and efficiency."
          link="https://65a6799da09eb2008d753699--peppy-bubblegum-f38f57.netlify.app/"
        />
        <ProjectsImg
          src="https://play-lh.googleusercontent.com/tCfpsNfg-Kam-Mxuw3uh4qmwSERnL8uof3FqTw3t8IG6jFo9KjqILoU14OEa7CySwg"
          projectTitle="Workout-Timer"
          text="React-based Workout Timer: Real-time clock, sound toggling, personalized routines adapting to the time of day."
          link="https://65a6769cc7771a00a17b1897--calm-taiyaki-837093.netlify.app/"
        />
        <ProjectsImg
          src="https://play-lh.googleusercontent.com/KBwBNsVwGz2zyfe0Dqrkzmtf7OCJ7QQuK0kPuOOwxXTv23pBh34CMr_eDj03eGdQr0A"
          projectTitle="Eat-n-split"
          text="React-powered Eat and Split app: Easily split bills, track expenses, and manage shared costs effortlessly with friends."
          link="https://zingy-arithmetic-fbd779.netlify.app/?"
        />
        <ProjectsImg
          src="https://www.shutterstock.com/image-vector/weather-forecast-app-interface-vector-260nw-2045868041.jpg"
          projectTitle="ForeCastify"
          text="A simple weather application built with React that enables users to check the weather forecast for specific locations."
          link="https://659531ff0f70d883df99e866--tranquil-halva-ce5a42.netlify.app"
        />
        <ProjectsImg
          src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/547/318/datas/original.png"
          projectTitle="Fast React Pizza Co."
          text="Fast React Pizza Co.: Vite and React-powered app for seamless pizza ordering with a user-friendly interface and real-time updates."
          link="https://65a67c32978dc5009d309879--peppy-bubblegum-f38f57.netlify.app/"
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
