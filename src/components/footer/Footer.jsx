import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Shubham Adhya</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#axperience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.in/"><BsLinkedin/></a>
        <a href="https://linkedin.in/"><BsLinkedin/></a>
        <a href="https://linkedin.in/"><BsLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Shubham Adhya. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer