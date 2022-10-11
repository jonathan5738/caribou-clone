import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../css/Refinance/Section1.css'

function Section1() {
  const variants = {
    initial: {opacity: 0, scale: .7},
    animation: {opacity: 1, scale: 1}
  }
  return (
    <section className="refinance-section1">
      <motion.div className="refinance-section1-text"
         variants={variants}
         initial='initial'
         animate='animation'
         transition={{ease: 'easeInOut', duration: .3}}
       >
          <span className="title-span">Refinance with Caribou</span>
          <h2>You could save <br /> $100+ a month <br /> on your car loan*</h2>
          <p>What would you do with extra money in your wallet each month?</p>
          <Link to="#" className='btn'><div className="check-rate-content">Get started <BsFillArrowRightCircleFill/></div> </Link>
      </motion.div>
        <motion.div className="refinance-section1-img"
           variants={variants}
           initial='initial'
           animate='animation'
           transition={{ease: 'easeInOut', duration: .3}}
        >
          <img src="https://www.caribou.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxusdw2szt8em%2F1F46pzVHs3ZBfoDbG6Vfzv%2F0c51bbca8761828be26dd90cb480f03c%2FRefinance_header.png&w=640&q=75" alt="" />
        </motion.div>
    </section>
  )
}

export default Section1