import React from "react";
import "../index.css";
import ProfileDetails from "../about/ProfileDetails";
import ProfessionalInfo from "../about/ProfessionalInfo";
function About() {
  const name = "Sabita Khadka";
  const age = 19;
  const gender = "girl";

  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <ProfileDetails  gender={gender} age={age} name={name} />
      <ProfessionalInfo gender={gender} age={age} name={name}/>
    </section>
  );
}

export default About;
