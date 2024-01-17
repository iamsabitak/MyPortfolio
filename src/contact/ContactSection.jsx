import React from "react";
import Form from "./Form";
import ContactIcons from "./ContactIcons";

function ContactSection() {
  return (
    <div className="container">
      <h2>Contact Me</h2>
      <p>
        Let's connect! Use the form below or reach out to me at{" "}
        <a href="mailto:sabitakhadka091@gmail.com">sabitakhadka091@gmail.com</a>
        . Let's work together and bring your ideas to life!
      </p>
      <Form />
      <ContactIcons />
    </div>
  );
}

export default ContactSection;
