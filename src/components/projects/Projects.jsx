import React from 'react'
import './Projects.css'

import IMG1 from '../../assets/MirrorMate SS.png'
import IMG2 from '../../assets/Tripwise SS.png'
import IMG3 from '../../assets/BuddyCart SS.png'

import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {SiMongodb} from 'react-icons/si'
import {SiJsonwebtokens} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
import {SiSocketdotio} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {BiLinkExternal} from 'react-icons/bi'
import {IoLogoJavascript} from 'react-icons/io'

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
const DarkTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent work</h5>
      <h2>My Projects</h2>
      <div className="container Projects__container">
        <article className="Projects__item project-card">
          <div className="Projects__item-image">
            <img src={IMG1} alt='' />
          </div>
          <h3 className='project-title'>MirrorMate</h3>
          <p  className='project-description'>MirrorMate is a versatile communication platform. With this app, users can seamlessly connect, chat, make video calls, and share their screens in real-time.</p>

          <div className='project__stack project-tech-stack'>
          <DarkTooltip title="HTML" placement='bottom' className='tooltip' followCursor>
            <div><AiFillHtml5 className='logo'/></div>
          </DarkTooltip>
          <DarkTooltip title="CSS" placement='bottom' className='tooltip' followCursor>
            <div><IoLogoCss3 className='logo'/></div>
          </DarkTooltip>
          <DarkTooltip title="NodeJS" placement='bottom' className='tooltip' followCursor>
            <div><FaNodeJs className='logo'/></div>
          </DarkTooltip>
          <DarkTooltip title="MongoDB" placement='bottom' className='tooltip' followCursor>
            <div><SiMongodb className='logo'/></div>
          </DarkTooltip>
          <DarkTooltip title="Socket.io" placement='bottom' className='tooltip' followCursor>
            <div><SiSocketdotio className='logo'/></div>
          </DarkTooltip>
          </div>
          <div className="Projects__item-cta">
            <a href="https://github.com/MSaifKhan01/peaceful-plastic-9412" className='btn project-github-link' target='_blank' rel='noreferrer'>
            <AiFillGithub className='logo_btn'/>
              GitHub
              </a>
            <a href="https://shimmering-dasik-b86b46.netlify.app/" className='btn btn-primary project-deployed-link' target='_blank' rel='noreferrer'>
            <BiLinkExternal className='logo_btn'/>
              Live Demo
              </a>
          </div>
        </article>

        <article className="Projects__item project-card">
          <div className="Projects__item-image">
            <img src={IMG2} alt='TripWise' />
          </div>
          <h3 className='project-title'>TripWise</h3>
          <p className='project-description'>TripWise is an online travel services website.</p>
          <div className='project__stack project-tech-stack'>
          <DarkTooltip title="HTML" placement='bottom' className='tooltip' followCursor>
            <div><AiFillHtml5 className='logo'/></div>
          </DarkTooltip>
          <DarkTooltip title="Bootstrap" placement='bottom' className='tooltip' followCursor>
            <div><FaBootstrap className='logo'/></div>
          </DarkTooltip>
          <DarkTooltip title="NodeJS" placement='bottom' className='tooltip' followCursor>
            <div><FaNodeJs className='logo'/></div>
          </DarkTooltip>
          <DarkTooltip title="Express" placement='bottom' className='tooltip' followCursor>
            <div><SiExpress className='logo'/></div>
          </DarkTooltip>
          <DarkTooltip title="MongoDB" placement='bottom' className='tooltip' followCursor>
            <div><SiMongodb className='logo'/></div>
          </DarkTooltip>
          <DarkTooltip title="JWT" placement='bottom' className='tooltip' followCursor>
            <div><SiJsonwebtokens className='logo'/></div>
          </DarkTooltip>
          </div>
          <div className="Projects__item-cta">
            <a href="https://github.com/shubham-Adhya/melodic-cream-5493" className='btn project-github-link' target='_blank' rel='noreferrer'>
            <AiFillGithub className='logo_btn'/>
              GitHub
            </a>
            <a href="https://inquisitive-heliotrope-8f69d2.netlify.app/" className='btn btn-primary project-deployed-link' target='_blank' rel='noreferrer'>
            <BiLinkExternal className='logo_btn'/>
              Live Demo
            </a>
          </div>
        </article>


        <article className="Projects__item project-card">
          <div className="Projects__item-image">
            <img src={IMG3} alt='BuddyCart' />
          </div>
          <h3 className='project-title'>BuddyCart</h3>
          <p className='project-description'>BuddyCart e-commerce platform that allows users to shop for their favorite items online.</p>
          <div className='project__stack project-tech-stack'>
          <DarkTooltip title="HTML" placement='bottom' className='tooltip' followCursor>
            <div><AiFillHtml5 className='logo'/></div>
          </DarkTooltip>
          <DarkTooltip title="CSS" placement='bottom' className='tooltip' followCursor>
            <div><IoLogoCss3 className='logo'/></div>
          </DarkTooltip>
          <DarkTooltip title="JavaScript" placement='bottom' className='tooltip' followCursor>
            <div><IoLogoJavascript className='logo'/></div>
          </DarkTooltip>


          </div>
          <div className="Projects__item-cta">
            <a href="https://github.com/vipullsingh/dirty-quilt-1530" className='btn project-github-link' target='_blank' rel='noreferrer'>
            <AiFillGithub className='logo_btn'/>
              GitHub
            </a>
            <a href="https://dirty-quilt-1530.netlify.app/" className='btn btn-primary project-deployed-link' target='_blank' rel='noreferrer'>
            <BiLinkExternal className='logo_btn'/>
              Live Demo
            </a>
          </div>
        </article>
            
      </div>
    </section>
  )
}

export default Projects