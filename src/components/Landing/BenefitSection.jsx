import React from 'react'
import { motion } from 'framer-motion'
import {FiDivide, FiMessageCircle, FiLayers, FiZap} from 'react-icons/fi'
import '../css/Landing/BenefitSection.css'
function BenefitSection() {
  const variants = {
    initial: {opacity: 0, scale: .7},
    animation: {opacity: 1, scale: 1}
 }
  return (
    <section className="benefit-section">
        <motion.div className="benefit-section-content"
           variants={variants}
           initial='initial'
           whileInView='animation'
           transition={{ease: 'easeInOut', duration: .3}}
        >
            <span className="title-span">What sets us apart</span>
            <h2>Tech to unlock low rates <br />
             people to make the process <br />
             easy</h2>
        </motion.div>
        <motion.div className="benefit-section-grid"
           variants={variants}
           initial='initial'
           whileInView='animation'
           transition={{ease: 'easeInOut', duration: .3}}
        >
             <div className="benefit-card">
                <FiDivide size={40} color={'#008765'}/>
                 <h3>Competitive rates</h3>
                 <p>Gain access to affordable refi rates that
                     could save you thousands over the life of
                      your loan* and insurance quotes.</p>
             </div>

             <div className="benefit-card">
                <FiMessageCircle size={40} color={'#008765'}/>
                 <h3>Dedicated support</h3>
                 <p>Our team of loan officers and insurance representatives
                     are standing by,
                     happy to help you through either process..</p>
             </div>

             <div className="benefit-card">
                <FiLayers size={40} color={'#008765'}/>
                 <h3>All in one place</h3>
                 <p>Take control of your car finances when you apply
                     for refinancing and car insurance through Caribou.</p>
             </div>

             <div className="benefit-card">
                <FiZap size={40} color={'#008765'}/>
                 <h3>Fast and easy</h3>
                 <p>Take control of your car finances when you apply
                     for refinancing and car insurance through Caribou.</p>
             </div>

        </motion.div>
    </section>
  )
}

export default BenefitSection