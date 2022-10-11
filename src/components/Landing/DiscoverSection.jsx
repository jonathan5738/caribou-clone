import React from 'react'
import '../css/Landing/DiscoverSection.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

function DiscoverSection() {
  const variants = {
    initial: {opacity: 0, scale: .7},
    animation: {opacity: 1, scale: 1}
  }
  return (
    <section className="discover-container">
        <div className="discover-content">
            <motion.div className="discover-content-text" 
              variants={variants}
              initial='initial'
              whileInView='animation'
              transition={{ease: 'easeInOut', duration: .3}}
            >
                <span className="title-span">Are you getting the most out of your savings?</span>
                <h2>Discover how much you could save</h2>
                <p>Drivers could save more when they refinance and switch their car insurance through Caribou.</p>
                <Link to="#" className='discover-get-started'>Get started <BsFillArrowRightCircleFill size={23}/></Link>
            </motion.div>
            <motion.div className="discover-content-img"
               variants={variants}
               initial='initial'
               whileInView='animation'
               transition={{ease: 'easeInOut', duration: .3}}
            >
                <img className='discover-content-img-desk' src="https://www.caribou.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxusdw2szt8em%2F79qlozl9vzkQ2UfdCpJvBY%2F7ae26d93ed264465f6614c27b74441ca%2FRefi_insurance_customer_hp_desktop.png&w=1920&q=75" alt="" />
                <img className='discover-content-img-mobile' src="https://www.caribou.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxusdw2szt8em%2F1uzEbt234GvKgwrGRxHJEd%2F47aa022eaec40477a9f33219b5ad1137%2FRefi_insurance_customer_hp_mobile.png&w=384&q=75" alt="" />
            </motion.div>
        </div>
    </section>
  )
}

export default DiscoverSection