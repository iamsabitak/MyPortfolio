import React from "react";
import "../index.css";
function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>
          Let's connect! Use the form below or reach out to me at{" "}
          <a href="mailto:sabitakhadka091@gmail.com">
            sabitakhadka091@gmail.com
          </a>
          . Let's work together and bring your ideas to life!
        </p>
        <form action="https://formspree.io/f/xdoqndzg" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required method="POST" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required method="POST" />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            method="POST"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
        <div className="contact-icons">
          <a href="https://www.facebook.com/photo/?fbid=458507539804800&set=a.125485893106968">
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a href="http://www.linkedin.com/in/sabita-khadka-0b8291269">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://twitter.com/sabita_khadka01">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://github.com/account">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
