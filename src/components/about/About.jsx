import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about' className='about section'>
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_image" className='about_img'/>
          </div>
        </div>

        <div className="about__content">
            <div className='about__cards'>
              <article className='about__card'>
                  <FaAward className='about_icon'/>
                  <h5>1200+</h5>
                  <small>Hours of Coding</small>
              </article>
              <article className='about__card'>
                  <VscFolderLibrary className='about_icon'/>
                  <h5>6+</h5>
                  <small>Projects Done</small>
              </article>
              <article className='about__card'>
                  <FiUsers  className='about_icon'/>
                  <h5>100+</h5>
                  <small>Hours of Softskills Sessions</small>
              </article>
            </div>
            <h2 className='about__title' id="user-detail-name"><span>I'm </span>Shubham Adhya </h2>
            <p  id="user-detail-intro">
            I am a passionate and driven Back-End Web Developer with skills in MERN stack, eager to make my mark in the world of technology with a keen interest in working with Node.js, Express.js, and MongoDB. My goal is to leverage my skills and experience to develop robust and scalable web applications that meet the needs of businesses and individuals alike.
            </p>
            <div className='about__extra'>
              <div>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
              </div>
              <div>
                <h5>Age: &nbsp;<span> 23 Years</span> </h5>
                <h5 id="contact-email">Email: &nbsp;<span> shubhamadhya@gmail.com</span> </h5>
                <h5>From: &nbsp;<span> Kolkata, India</span></h5>
              </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default About