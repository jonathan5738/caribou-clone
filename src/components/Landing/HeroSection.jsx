import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import '../css/Landing/HeroSection.css'
function HeroSection() {
  return (
    <motion.section className="hero-section"
    initial={{ opacity: 0, scale: .7}}
    animate={{ opacity: 1, scale: 1}}
    transition={{ ease: 'easeIn', duration: .3}}
    >
        <div className="hero-section-content">
             <h2>Take control of your car</h2>
             <h2>payments</h2>
             <p>You could save $100+ a month on your car loan*</p>
             <Link to="#" className='check-rate'><div className="check-rate-content">check your rate for free < BsFillArrowRightCircleFill/> </div></Link>
        </div>
    </motion.section>
  )
}

export default HeroSection