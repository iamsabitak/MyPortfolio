import React from "react";
import "./index.css";

function About() {
  const name = "Sabita Khadka";
  const age = 19;
  const gender = "girl";
  const email = "your.email@example.com";
  const phone = "+1234567890";
  const address = "Your Address, City, Country";

  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="profile-details">
        <div className="profile-picture">
          <img
            src="https://kinsta.com/wp-content/uploads/2021/11/front-end-developer.png"
            alt="Upload Error"
          />
        </div>
        <div className="personal-info">
          <h3>{name}</h3>
          <p>{gender === "girl" ? "Female" : "Male"}, {age} years old</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Address: {address}</p>
        </div>
      </div>
      <div className="professional-info">
        <h3>Professional Summary</h3>
        <p>
      Hi there! I'm {name}, a {age}-year-old {gender}. I'm really enthusiastic about creating engaging websites! I'm skilled in JavaScript, HTML, CSS, and GitHub. Currently, I'm diving deeper into React to make more interactive web experiences. Join me on this journey as we learn to create amazing digital spaces together. Let's work together to build something extraordinary! <span role="img" aria-label="sparkles">🌟</span><span role="img" aria-label="rocket">🚀</span>
    </p>
        <h3>Skills</h3>
        <p>
          My skills include HTML, CSS, JavaScript, React.js, GitHub, and more.
        </p>
        <h3>Education</h3>
        <p>+2 Level - Premier College of Kathmandu - GPA: 3.49</p>
        <p>SEE - Sitaram Secondary School - GPA: 3.55</p>
      </div>
    </section>
  );
}

export default About;
