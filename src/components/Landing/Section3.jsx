import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Landing/Section3.css'
function Section3() {
  return (
    <>
        <section className="section3">
            <div className="section3-img">
                <img src="https://images.ctfassets.net/xusdw2szt8em/52kTR5ScTjAtU0h7qg2pO1/3a22164f410dd336256fb4df759b7cc6/Caribou_savings_hp.png" alt="" />
            </div>
            <div className="section3-text">
                <span className='title-span'>DID YOU GET FINANCING FROM YOUR DEALER?</span>
                <h2>Fast, easy auto <br /> refinance</h2>
                <p>Instantly access competitive rates in minutes,
                    with a dedicated team available to walk you through the process.
                </p>
                <Link to="#" className='btn'>see how it works</Link>
            </div>
        </section>
        <div className="section3-div1-container">
            <div className="section3-grid">
                 <div className="section3-div1">
                      <span className='title-span'>FIND THE RIGHT COVERAGE FOR YOU</span>
                      <h2>Choose car insurance with confidence</h2>
                      <p>We shop and compare insurance quotes from trusted carriers in minutes,
                         saving you time and the hassle of having to research on your own.</p>
                    <Link to="#" className='btn'>Get to quote</Link>
                 </div>
                 <div className="section3-div2-img">
                     <img src="https://www.caribou.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxusdw2szt8em%2F6hRyfLfSNErdoIRVvDBqxo%2Fdb9e715bfb02d0a8e46522870d532d09%2FInsurance_customer_hp_desktop.png&w=1920&q=75" alt="" />
                 </div>
            </div>
        </div>
    </>
  )
}

export default Section3