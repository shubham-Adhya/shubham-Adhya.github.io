import React from 'react'
import Shubham_Adhya_Resume from '../../assets/Shubham-Adhya-Resume.pdf'

const CTA = () => {

  return (
    <div className='cta'>
        <a href={Shubham_Adhya_Resume} download className='btn' target='_blank' rel='noreferrer'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA