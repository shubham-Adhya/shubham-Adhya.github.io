import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/shubham-adhya" target='_blank'><BsLinkedin className='header__socials-icon'/></a>
        <a href="https://github.com/shubham-Adhya" target='_blank'><FaGithub className='header__socials-icon'/></a>
        {/* <a href="https://linkedin.com/in/shubham-adhya" target='_blank'></a> */}
    </div>
  )
}

export default HeaderSocials