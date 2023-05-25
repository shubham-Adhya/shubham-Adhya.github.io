import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo' id="user-detail-name">Shubham Adhya</a>
      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">My Skills</a></li>
        <li><a href="#projects">My Projects</a></li>
        <li><a href="#stats">GitHub Stats</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/shubham-adhya" target='_blank' rel='noreferrer'
        id="contact-linkedin">
          <BsLinkedin/>
        </a>
        <a href="https://www.github.com/shubham-Adhya" target='_blank' rel='noreferrer' id="contact-github">
          <BsGithub/>
        </a>
      </div>
      <div className="footer__copyright">
        <h4><i> “I slept and dreamt that life was a joy. I awoke and saw that life was service. I acted and behold, service was a joy.”- Rabindranath Tagore</i> </h4>
      </div>
    </footer>
  )
}

export default Footer