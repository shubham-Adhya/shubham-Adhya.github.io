import React from 'react'
import Shubham_Adhya_Resume from '../../assets/Shubham-Adhya-Resume.pdf'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {BsCodeSlash} from 'react-icons/bs'
import {GoDesktopDownload} from 'react-icons/go'
import { useState } from 'react'

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

const Nav = () => {
  const [activeNav, setActiveNav]=useState("#")
  const onClickhandler = () => {
    return window.open(
      "https://drive.google.com/file/d/1sVhFtj1C1H-Gq-eMZLT-CbtleuN7lnPN/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <nav id="nav-menu">
      <DarkTooltip title="Home" placement='top'>
        <a href="#home" onClick={()=> setActiveNav('#')} className={activeNav==="#" ? 'active nav-link home': 'nav-link home'} >
          <AiOutlineHome/>
        </a>
      </DarkTooltip>

      <DarkTooltip title="About" placement='top'>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav=== '#about' ? 'active nav-link about': 'nav-link about'}>
          <AiOutlineUser/>
      </a>
      </DarkTooltip>

      <DarkTooltip title="My Skills" placement='top'>
      <a href="#skills" onClick={()=> setActiveNav('#skill')} className={activeNav=== '#skill' ? 'active nav-link skills': 'nav-link skills'}>
        <BiBook/>
      </a>
      </DarkTooltip>

      <DarkTooltip title="My Projects" placement='top'>
      <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav=== '#projects' ? 'active nav-link projects': 'nav-link projects'}>
        <BsCodeSlash/>
      </a>
      </DarkTooltip>

      <DarkTooltip title="GitHub Stats" placement='top'>
      <a href="#stats" onClick={()=> setActiveNav('#stats')} className={activeNav=== '#stats' ? 'active': ''}>
        <AiFillGithub/>
      </a>
      </DarkTooltip>

      <DarkTooltip title="Contact" placement='top'>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active nav-link contact': 'nav-link contact'}>
        <BiMessageSquareDetail/>
      </a>
      </DarkTooltip>

      <DarkTooltip title="Download Resume" placement='top'>
        <a target='_blank' href={Shubham_Adhya_Resume} download='Shubham_Adhya_Resume.pdf' onClick={onClickhandler} rel='noreferrer' className='nav-link resume' id="resume-button-1">
          <GoDesktopDownload/>
        </a>
      </DarkTooltip>

    </nav>
  )
}

export default Nav