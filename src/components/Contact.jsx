import React from "react";
import "../index.css";
import Form from "../contact/Form";
import ContactIcons from "../contact/ContactIcons";
import ContactSection from "../contact/ContactSection";
function Contact() {
  return (
    <section id="contact" className="section contact">
      <ContactSection Form={Form} ContactIcons={ContactIcons} />
    </section>
  );
}

export default Contact;
