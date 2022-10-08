import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Landing/BannerSection.css'
function BannerSection() {
  return (
    <section className="bannier-section">
        <div className="bannier-section-content">
            <h2>No hidden fees. <br />
                Co-borrowers welcome. <br />
                Fully online process.</h2>
            <p>Got more questions? We've got answers.</p>
            <Link to="#" className="btn">Search our FAQs</Link>
        </div>
    </section>
  )
}

export default BannerSection