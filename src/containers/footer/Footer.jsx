import React from 'react'
import './footer.css'
import logo from "../../assests/logo.svg"

function Footer() {
  return (
    <div className='gpt-footer section-padding'>
      <div className='gpt-footer-heading'>
        <h1 className="gradient-text">Do you really want to future open ai</h1>

      </div>
      <div className="gpt-footer-btn">
        <p>Request Early Acsess</p>
      </div>
      <div className="gpt-footer-links">
        <div className="gpt-footer-links-logo">
          <img src={logo} alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="gpt-footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>


        </div>
        <div className="gpt-footer-links-div">
          <h4>Compony</h4>
          <p>Termd and Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
          


        </div>
        <div className="gpt-footer-links-div">
          <h4>Get in touch</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>03063683343</p>
          <p>sohailasuf123@gmail.com</p>
          


        </div>
      </div>
      <div className="gpt-footer-copyright">
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>

    </div>
  )
}

export default Footer