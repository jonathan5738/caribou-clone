import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../css/Landing/Section3.css'
function Section3() {
  const variants = {
     initial: {opacity: 0, scale: .7},
     animation: {opacity: 1, scale: 1}
  }
  return (
    <>
        <section className="section3">
            <motion.div className="section3-img"
             variants={variants}
             initial='initial'
             whileInView='animation'
             transition={{ease: 'easeInOut', duration: .3}}
            >
                <img src="https://images.ctfassets.net/xusdw2szt8em/52kTR5ScTjAtU0h7qg2pO1/3a22164f410dd336256fb4df759b7cc6/Caribou_savings_hp.png" alt="" />
            </motion.div>
            <motion.div className="section3-text"
              variants={variants}
              initial='initial'
              whileInView='animation'
              transition={{ease: 'easeInOut', duration: .3}}
            >
                <span className='title-span'>DID YOU GET FINANCING FROM YOUR DEALER?</span>
                <h2>Fast, easy auto <br /> refinance</h2>
                <p>Instantly access competitive rates in minutes,
                    with a dedicated team available to walk you through the process.
                </p>
                <Link to="#" className='btn'>see how it works</Link>
            </motion.div>
        </section>
        <div className="section3-div1-container">
            <div className="section3-grid" >
                 <motion.div className="section3-div1"
                    variants={variants}
                    initial='initial'
                    whileInView='animation'
                    transition={{ease: 'easeInOut', duration: .3}}
                 >
                      <span className='title-span'>FIND THE RIGHT COVERAGE FOR YOU</span>
                      <h2>Choose car insurance with confidence</h2>
                      <p>We shop and compare insurance quotes from trusted carriers in minutes,
                         saving you time and the hassle of having to research on your own.</p>
                    <Link to="#" className='btn'>Get to quote</Link>
                 </motion.div>
                 <motion.div className="section3-div2-img"
                   variants={variants}
                   initial='initial'
                   whileInView='animation'
                   transition={{ease: 'easeInOut', duration: .3}}
                 >
                     <img src="https://www.caribou.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxusdw2szt8em%2F6hRyfLfSNErdoIRVvDBqxo%2Fdb9e715bfb02d0a8e46522870d532d09%2FInsurance_customer_hp_desktop.png&w=1920&q=75" alt="" />
                 </motion.div>
            </div>
        </div>
    </>
  )
}

export default Section3