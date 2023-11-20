import React from 'react'
import Card from '../../Components/Card'
import Navbar from '../Navbar/Navbar'
import "./Contact.css";

function Contact() {
  return (
    <div>
      <Navbar title="contact" />
      <div style={{marginTop: "40px"}}>
        <div id="left-column">
          <h1 className="contact-title">Get In Touch.</h1>
          <p className="contact-des">Want to discuss anything with me ? <br />
            Fill up this form
          </p>
          <form className="input-container">
            <div className="form-group"><label>Your Name</label><input type="text" name="name" id="name"
              className="form-control" required="" /></div>
            <div className="form-group"><label>Your Email</label><input type="email" name="email" id="email"
              className="form-control" required="" /></div>
            <div className="form-group"><label>Your Message</label><input type="text" name="message"
              id="mmessage" className="form-control" required="" /></div>
            <button type="submit" className="contact-send-btn">
              Send Message
            </button>
          </form>

          
        </div>

        <div id="contact-right">
          <img className="contact-img" src="images/contact_us.svg" />
        </div>

      </div>
    </div>

  )
}

export default Contact