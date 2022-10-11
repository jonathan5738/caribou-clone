import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import '../css/Landing/BannerSection.css'
function BannerSection() {
  return (
    <motion.section className="bannier-section"
      initial={{ opacity: 0, scale: .7}}
      animate={{ opacity: 1, scale: 1}}
      transition={{ ease: 'easeIn', duration: .3}}
    >
        <div className="bannier-section-content">
            <h2>No hidden fees. <br />
                Co-borrowers welcome. <br />
                Fully online process.</h2>
            <p>Got more questions? We've got answers.</p>
            <Link to="#" className="btn">Search our FAQs</Link>
        </div>
    </motion.section>
  )
}

export default BannerSection