import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className="contactText">
            <h3>Contact Us</h3>
            <h1>Feel free to <span>get in touch</span> with us.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="contact-email-flex">
              <input type="email" id='contact-btn' placeholder='Your Email Address' />
              <button id='contact-btn'>Contact Me</button></div>
        </div>
        <div className="contactimg">
            <img src="/media/contactEmail.svg" alt="contactUs" />
        </div>
    </div>
  )
}

export default Contact