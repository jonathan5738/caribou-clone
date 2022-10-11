import React from 'react'
import {motion} from 'framer-motion'
import '../css/Refinance/SectionRefinance3.css'
function SectionRefinance3() {
  const variants = {
    initial: {opacity: 0, scale: .7},
    animation: {opacity: 1, scale: 1}
}
  return (
    <section className="refinance-section3">
        <div className="refinance-section3-main-text">
            <span className="title-span">Easy process in 3 steps</span>
            <h2>An easy way to refinance your car</h2>
            <p>Convenient, transparent refinancing that could put money back in your wallet, with offers from our network of trusted lenders.</p>
        </div>
        <div className="refinance-section3-grid">

              <motion.div className="refinance-section3-img"
                 variants={variants}
                 initial='initial'
                 whileInView='animation'
                 transition={{ease: 'easeInOut', duration: .3}}
               >
                 <img src="https://www.caribou.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxusdw2szt8em%2F3dLEYqX2Xhuajar4Cn5AHV%2Fd5ec5d37ecfb41996fab5554388b9517%2FImg__6_.png&w=1920&q=75" alt="" />
              </motion.div>
              
              <motion.div className="refinance-section3-text"
                variants={variants}
                initial='initial'
                whileInView='animation'
                transition={{ease: 'easeInOut', duration: .3}}
              >
                   <span className="title-span">step 1</span>
                   <h3>Check your rate</h3>
                   <p>Share minimal information and we’ll
                     find competitive pre-qualified loan options in minutes,
                      without impacting your credit.+ It’s that simple:
                     no obligation and no Social Security number required.++ </p>
              </motion.div>

            
              <motion.div className="refinance-section3-text"
                 variants={variants}
                 initial='initial'
                 whileInView='animation'
                 transition={{ease: 'easeInOut', duration: .3}}
              >
                   <span className="title-span">step 2</span>
                   <h3>Select your loan offer</h3>
                   <p>Pick the refi offer that works best for you,
                     and select from our other products to help protect the value of 
                     your vehicle and keep unwanted expenses at bay.
                     Our Customer Support Team is available to help you every step of the way. </p>
              </motion.div>

              <motion.div className="refinance-section3-img" 
                variants={variants}
                initial='initial'
                whileInView='animation'
                transition={{ease: 'easeInOut', duration: .3}}
              >
                 <img src="https://www.caribou.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxusdw2szt8em%2F2R0ChqUIdQah9eTZ2dZFZi%2Fd627c6f7c0e09010359230ed9418a390%2FRefinance_page.png&w=1920&q=75" alt="" />
              </motion.div>

        </div>
    </section>
  )
}

export default SectionRefinance3