import React from 'react'
import { motion } from 'framer-motion'
import '../css/Refinance/SectionRefinance5.css'
function SectionRefinance5() {
  const variants = {
    initial: {opacity: 0, scale: .7},
    animation: {opacity: 1, scale: 1}
}
  return (
    <section className="section-refinance5-container">
        <motion.div className="section-refinance5-img"
           variants={variants}
           initial='initial'
           whileInView='animation'
           transition={{ease: 'easeInOut', duration: .3}}
        >
            <img src="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg" alt="" />
        </motion.div>
        <motion.div className="section-refinance5-text"
          variants={variants}
          initial='initial'
          whileInView='animation'
          transition={{ease: 'easeInOut', duration: .3}}
        >
            <h2><span className="quote">"</span>They got my interest rate cut by half and my monthly payment reduced by $70 a month. <span className="quote">"</span></h2>
        </motion.div>
    </section>
  )
}

export default SectionRefinance5