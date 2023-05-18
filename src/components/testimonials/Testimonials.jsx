import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsArr=[
  {
    id:1,
    avatar: AVTR1,
    name: "John Snow",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium cum voluptatem reprehenderit fuga sit. Animi ad dolor ipsum fuga!"
  },
  {
    id:2,
    avatar: AVTR2,
    name: "John Snow",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium cum voluptatem reprehenderit fuga sit. Animi ad dolor ipsum fuga!"
  },
  {
    id:3,
    avatar: AVTR3,
    name: "John Snow",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium cum voluptatem reprehenderit fuga sit. Animi ad dolor ipsum fuga!"
  },
  {
    id:4,
    avatar: AVTR4,
    name: "John Snow",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium cum voluptatem reprehenderit fuga sit. Animi ad dolor ipsum fuga!"
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        // install Swiper modules
          modules={[ Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
        {
          testimonialsArr.map(({id,avatar, name, review})=>{
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                    {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials