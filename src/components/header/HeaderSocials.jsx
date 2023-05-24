import React from 'react'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


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



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <DarkTooltip title="LinkedIn" placement='right'>
          <a href="https://linkedin.com/in/shubham-adhya" target='_blank' rel='noreferrer' id="contact-linkedin">
            <BsLinkedin className='header__socials-icon'/>
          </a>
        </DarkTooltip>

        <DarkTooltip title="GitHub" placement='right'>
        <a href="https://github.com/shubham-Adhya" target='_blank' rel='noreferrer' id="contact-github">
          <FaGithub className='header__socials-icon'/>
        </a>
        </DarkTooltip>

        {/* <a href="https://linkedin.com/in/shubham-adhya" target='_blank'></a> */}
    </div>
  )
}

export default HeaderSocials