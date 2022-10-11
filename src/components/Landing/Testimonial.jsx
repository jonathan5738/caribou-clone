import React from 'react'
import { FiAward } from "react-icons/fi"
import Card from '../utils/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/Landing/Testimonial.css'

function Testimonial() {
  const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Aspernatur impedit totam natus, provident
   sapiente sunt unde fuga molestiae veritatis
    maxime? Enim in doloremque dolorem
  dolore, est beatae aut fuga asperiores.`
  return (
    <section className="testimonial">
        <div className="testimonial-section1">
            <span className="title-span">CUSTOMER STORIES</span>
            <h2>75,000+ happy drivers <br /> with more cash in their <br /> wallets</h2>
            <div className="testimonial-section1-flex">
                <div className="test-icon-container">
                    <FiAward className='test-icon' size={25}  color={"#008765"}/>
                    <FiAward className='test-icon' size={25} color={"#008765"}/>
                    <FiAward className='test-icon' size={25} color={"#008765"}/>
                    <FiAward className='test-icon' size={25} color={"#008765"}/>
                </div>
                <p>4 star reviews from our clients on <span className="site">Trustpilot</span></p>
            </div>
        </div>
        <div className="testimonial-section2">
            <Swiper className="slider-container"
                  modules={[Navigation, Pagination, A11y]}
                  breakpoints={{ 828: {slidesPerView: 3}}}
                  spaceBetween={50}
                  slidesPerView={1}
                  pagination={true}
               >
                <SwiperSlide className='slider'>
                    <Card content={content} author={'alice smith'}
                     location={'Madrid, Spain'}
                     />
                </SwiperSlide>
                <SwiperSlide className='slider'>
                    <Card content={content}
                     author={'john doe'}
                     location={'Toulouse, France'}
                     />
                </SwiperSlide>
                <SwiperSlide className='slider'>
                    <Card content={content} 
                      author={'jonathan jones'}
                      location={'Rome, Italy'}
                      />
                </SwiperSlide>
               </Swiper>
        </div>
    </section>
  )
}

export default Testimonial