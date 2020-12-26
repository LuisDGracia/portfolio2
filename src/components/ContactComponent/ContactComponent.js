import React from 'react'

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h3 className="tittle">Contact</h3>
        <form className="form" action="">
          <input type="text" placeholder="Name" name="name" required />
          <input type="text" placeholder="e-mail" name="mail" required />
          <textarea placeholder="Message:" name="message"></textarea>
          <input className="button" type="submit" value="send" />
        </form>
      </div>
    </section>
  );
}

export default Contact
