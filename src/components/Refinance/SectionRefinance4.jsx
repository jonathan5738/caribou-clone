import React from 'react'
import { motion } from 'framer-motion'
import '../css/Refinance/SectionRefinance4.css'

function SectionRefinance4() {
    const variants = {
        initial: {opacity: 0, scale: .7},
        animation: {opacity: 1, scale: 1}
    }
  return (
    <section className="section-refinance4">
         <div className="section-refinance4-text">
             <span className="title-span">Control every part of your car ownership</span>
             <h2>Why stop there?</h2>
             <p>Refinancing through us can unlock add-on products to help you protect the value of your car.</p>
         </div>
         <motion.div className="section-refinance4-container"
            variants={variants}
            initial='initial'
            whileInView='animation'
            transition={{ease: 'easeInOut', duration: .3}}
         >
             <div className="section-refinance4-flex">
                    <div className="section-refinance4-card">
                        <h3>Auto Refinance</h3>
                        <p>An auto refi could save you thousands over
                            the lifetime of your loan.* We make it easy with a
                            simple process and top-notch customer service to boot.</p>
                    </div>

                    <div className="section-refinance4-card">
                        <h3>Switch Insurance</h3>
                        <p>Protect yourself and your wallet with car insurance. 
                            We work with 
                            trusted national carriers to provide affordable quotes.</p>
                    </div>
             </div>

             <div className="section-refinance4-flex">
                <div className="section-refinance4-card">
                    <h3>Extended Protection </h3>
                    <p>Mitigate the impact of unexpected car expenses 
                        with Extended Vehicle Protection, which could pay for costly
                        repairs and can get you back on the road quickly.</p>
                </div>
                <div className="section-refinance4-card">
                        <h3>Total Loss Protection </h3>
                        <p>Ensure peace of mind against a total loss of your
                            car with a GAP (Guaranteed Asset Protection) product.
                            It safeguards your wallet if you
                            owe more on your loan than your car is worth.</p>
                </div>
             </div>

             <div className="section-refinance4-flex">
                    <div className="section-refinance4-card">
                        <h3>Key Replacement</h3>
                        <p>Keys could cost more to replace than your smartphone. 
                            Take the worry out of misplacing your keys with
                            Key Replacement coverage, which could cover 
                            the cost of new keys without a deductible!</p>
                    </div>

                    <div className="section-refinance4-card">
                        <h3>Cosmetic Care</h3>
                        <p>Keep your car looking shiny and new with the Cosmetic
                            Care Package. Coverage could include small dents and dings,
                            windshields, rims, wheels, and more.</p>
                    </div>
             </div>

         </motion.div>
    </section>
  )
}

export default SectionRefinance4