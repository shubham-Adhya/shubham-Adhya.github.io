import React from 'react'
import './Portfolio.css'

import IMG1 from '../../assets/MirrorMate SS.png'
import IMG2 from '../../assets/Tripwise SS.png'

import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {TbBrandJavascript} from 'react-icons/tb'
import {SiMongodb} from 'react-icons/si'
import {SiJsonwebtokens} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
import {SiSocketdotio} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {BiLinkExternal} from 'react-icons/bi'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>My Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
          </div>
          <h3>MirrorMate</h3>
          <p>MirrorMate is a versatile communication platform. With this app, users can seamlessly connect, chat, make video calls, and share their screens in real-time.</p>
          <div className='project__stack'>
            <AiFillHtml5 className='logo'/>
            <IoLogoCss3 className='logo'/>
            <FaNodeJs className='logo'/>
            <SiMongodb className='logo'/>
            <SiSocketdotio className='logo'/>
          </div>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MSaifKhan01/peaceful-plastic-9412" className='btn' target='_blank' rel='noreferrer'>
            <AiFillGithub className='logo_btn'/>
              GitHub
              </a>
            <a href="https://shimmering-dasik-b86b46.netlify.app/" className='btn btn-primary' target='_blank' rel='noreferrer'>
            <BiLinkExternal className='logo_btn'/>
              Live Demo
              </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt='TripWise' />
          </div>
          <h3>TripWise</h3>
          <p>TripWise is an online travel services website.</p>
          <div className='project__stack'>
            <AiFillHtml5 className='logo'/>
            <FaBootstrap className='logo'/>
            <FaNodeJs className='logo'/>
            <SiExpress className='logo'/>
            <SiMongodb className='logo'/>
            <SiJsonwebtokens className='logo'/>
          </div>
          <div className="portfolio__item-cta">
            <a href="https://github.com/shubham-Adhya/melodic-cream-5493" className='btn' target='_blank' rel='noreferrer'>
            <AiFillGithub className='logo_btn'/>
              GitHub
            </a>
            <a href="https://inquisitive-heliotrope-8f69d2.netlify.app/" className='btn btn-primary' target='_blank' rel='noreferrer'>
            <BiLinkExternal className='logo_btn'/>
              Live Demo
            </a>
          </div>
        </article>
            
      </div>
    </section>
  )
}

export default Portfolio