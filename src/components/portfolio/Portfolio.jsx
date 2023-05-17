import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const portfolioArr=[
  {
    id:1,
    image:IMG1,
    title: "TripWise",
    github: "https://github.com/shubham-Adhya/melodic-cream-5493",
    demo: "https://inquisitive-heliotrope-8f69d2.netlify.app/"
  },
  {
    id:2,
    image:IMG2,
    title: "TripWise",
    github: "https://github.com/shubham-Adhya/melodic-cream-5493",
    demo: "https://inquisitive-heliotrope-8f69d2.netlify.app/"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          portfolioArr.map(({id,image,title,github,demo})=>{
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio