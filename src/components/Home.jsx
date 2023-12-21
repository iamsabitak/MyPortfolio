import React from "react";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="text-content">
          <h1>
            Hi, I'm <span>Sabita Khadka</span>
          </h1>
          <div className="text-animate">
            <h3>React Developer</h3>
          </div>
          <p>
            Hey there! Welcome to my portfolio! I love building websites that
            look awesome and work great. I know some cool stuff like JavaScript,
            HTML, CSS, and GitHub. Right now, I'm learning more about React to
            make websites that are super fun to use! I'm excited to learn and
            grow in this field. Let's team up and make the internet a cooler
            place together. If you're into creating awesome online stuff, let's
            chat! 
          </p>
          <div className="btn-box">
            <a
              href="http://www.linkedin.com/in/sabita-khadka-0b8291269"
              className="btn"
            >
              Hire Me
            </a>
            <a href="mailto:sabitakhadka091@gmail.com" className="btn">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
      <div className="portfolio-img">
        <img
          src="https://img.freepik.com/premium-vector/internet-searching-concept_118813-3274.jpg?size=626&ext=jpg"
          alt="Upload Error"
        />
      </div>
    </section>
  );
}

export default Home;
