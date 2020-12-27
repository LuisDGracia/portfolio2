import React from 'react'
import './ContactStyles.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h3 className="tittle">Contact</h3>
        <form className="form" action="">
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="e-mail" name="mail" required />
          <textarea placeholder="Message:" name="message"></textarea>
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
}

export default Contact
