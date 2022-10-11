import React from 'react'
import {FiDivide, FiClock, FiTrendingUp} from 'react-icons/fi'
import { motion } from 'framer-motion'
import '../css/Refinance/SectionRefinance2.css'
function SectionRefinance2() {
    const variants = {
        initial: {opacity: 0, scale: .7},
        animation: {opacity: 1, scale: 1}
    }
  return (
     <motion.section className="refinance-section2"
        variants={variants}
        initial='initial'
        whileInView='animation'
        transition={{ease: 'easeInOut', duration: .3}}
     >
         <div className="refinance-section2-text">
            <h2>Fast and easy auto refinance</h2>
         </div>
         <div className="refinance-section2-grid">
             <div className="refinance-section2-div">
                 <FiDivide size={30} color={'#008765'}/>
                 <h3>You could save $100+ a month*</h3>
                 <p>Put cash back into your wallet. Our auto refinance customers
                     save an average of over $100/month on their car payments.</p>
             </div>

             <div className="refinance-section2-div">
                <FiTrendingUp size={30} color={'#008765'}/>
                 <h3>Access to competitive rates</h3>
                 <p>Put cash back into your wallet.
                     Our auto refinance customers save an average of
                      over $100/month on their car payments.</p>
             </div>

             <div className="refinance-section2-div">
                 <FiClock size={30} color={'#008765'}/>
                 <h3>Pre-qualify in minutes</h3>
                 <p>Put cash back into your wallet. Our auto refinance
                     customers save an average of over $100/month on their car payments.</p>
             </div>
         </div>
     </motion.section>
  )
}

export default SectionRefinance2