import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import '../css/heroSection/HeroSection.css'
function HeroSection() {
  return (
    <section className="hero-section">
        <div className="hero-section-content">
             <h2>Take control of your car</h2>
             <h2>payments</h2>
             <p>You could save $100+ a month on your car loan*</p>
             <Link to="#" className='check-rate'><div className="check-rate-content">check your rate for free < BsFillArrowRightCircleFill/> </div></Link>
        </div>
        <div className="advantages">
            <p>No impact to your credit score</p>
            <p>No hidden fees</p>
            <p>No SSN required ++</p>
        </div>
    </section>
  )
}

export default HeroSection