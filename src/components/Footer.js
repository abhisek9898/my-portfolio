import "./FooterStyles.css"

import React from 'react'

import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedinIn} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            <div>
              <p>Bhubaneswar</p>
              <p>Odisha</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            8249465347</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            abhisek.malla16@gmail.com</h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>Hi, I am Abhisek. Welcome to my Protfolio.I am a Web Devloper.</p>
          <div className="social">
          <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
          <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
          <FaLinkedinIn size={30} style={{color:"#fff", marginRight:"1rem"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer