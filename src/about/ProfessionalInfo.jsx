import React from 'react'

function ProfessionalInfo({name,age,gender}) {
  return (
    <div className="professional-info">
        <h3>Professional Summary</h3>
        <p>
          Hi there! I'm {name}, a {age}-year-old {gender}. I'm really
          enthusiastic about creating engaging websites! I'm skilled in
          JavaScript, HTML, CSS, and GitHub. Currently, I'm diving deeper into
          React to make more interactive web experiences. Join me on this
          journey as we learn to create amazing digital spaces together. Let's
          work together to build something extraordinary!{" "}
          <span role="img" aria-label="sparkles">
            🌟
          </span>
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </p>
        <h3>Skills</h3>
        <p>
          My skills include HTML, CSS, JavaScript, React.js, GitHub, and more.
        </p>
        <h3>Education</h3>
        <p>+2 Level - Premier College of Kathmandu - GPA: 3.49</p>
        <p>SEE - Sitaram Secondary School - GPA: 3.55</p>
      </div>
  )
}

export default ProfessionalInfo