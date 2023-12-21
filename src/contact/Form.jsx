import React from 'react'

function Form() {
  return (
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
  )
}

export default Form