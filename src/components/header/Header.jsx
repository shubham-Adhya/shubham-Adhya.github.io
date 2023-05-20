import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        <HeaderSocials/>

        <div className='header__content'>
          <div>
            <h5>Hello I'm</h5>
            <h1>Shubham Adhya</h1>
            <h4 className='text-light'> Node Backend Developer</h4>

            <CTA/>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
          </div>
          <div className='me'>
            <img src={ME} alt="me" className='me__image'/>
          </div>
        </div>

        

      </div>
    </header>
  )
}

export default Header