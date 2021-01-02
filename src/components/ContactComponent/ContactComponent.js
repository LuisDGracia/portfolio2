import React from 'react'
import './ContactStyles.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h3 className="contact__tittle">Contact</h3>
        <form 
          className="contact__form" 
          action="mailto:luisdegraciab@gmail.com?subject=Contact Us" 
          method="POST" 
          enctype="text/plain" >

          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="e-mail" name="mail" required />
          <textarea placeholder="Message:" name="message"></textarea>
          <input className="contact__button" type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
}

export default Contact
