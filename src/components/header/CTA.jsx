import React from 'react'
import Shubham_Adhya_Resume from '../../assets/Shubham-Adhya-Resume.pdf'

const CTA = () => {
  const onClickhandler = () => {
    return window.open(
      "https://drive.google.com/file/d/1sVhFtj1C1H-Gq-eMZLT-CbtleuN7lnPN/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className='cta'>
        <a target='_blank' href={Shubham_Adhya_Resume} download='Shubham_Adhya_Resume.pdf' onClick={onClickhandler} rel='noreferrer' className='btn' id="resume-button-2">Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA