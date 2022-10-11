import React from 'react'
import '../css/Footer/Footer.css'
import {Link} from 'react-router-dom'
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi"
function Footer() {
  return (
    <footer className="footer">
        <div className="footer-grid">
            <div className="footer-div">
                 <Link to="#" className='footer-logo'>Logo</Link>
                 <div className="footer-logos">
                     <FiGithub size={25} color={"#e7e7e7"}/>
                     <FiInstagram size={25} color={"#e7e7e7"}/>
                     <FiLinkedin size={25} color={"#e7e7e7"}/>
                     <FiTwitter size={25} color={"#e7e7e7"}/>
                 </div>
            </div>
            <div className="footer-div">
                <ul>
                    <h3>Products</h3>
                    <div className="footer-link-container">
                        <li><Link to="#">Refinance</Link></li>
                        <li><Link to="#">Insurance</Link></li>
                    </div>
                </ul>
            </div>

            <div className="footer-div">
                <ul>
                    <h3>Company</h3>
                    <div className="footer-link-container">
                        <li><Link to="#">About us</Link></li>
                        <li><Link to="#">Careers</Link></li>
                        <li><Link to="#">Lending centers</Link></li>
                        <li><Link to="#">Newsroom</Link></li>
                        <li><Link to="#">Contact us</Link></li>
                    </div>
                </ul>
            </div>

            <div className="footer-div">
                <ul>
                    <h3>Resources</h3>
                    <div className="footer-link-container">
                        <li><Link to="#">Resource Center</Link></li>
                        <li><Link to="#">Learning Library</Link></li>
                        <li><Link to="#">Find Savings by Vehicle</Link></li>
                        <li><Link to="#">Refinance Calculator</Link></li>
                        <li><Link to="#">FAQs</Link></li>
                        <li><Link to="#">Glossary</Link></li>
                    </div>
                </ul>
            </div>
            <div className="footer-div">
            <ul>
                    <h3>Contact Details</h3>
                    <li><Link to="#">Resource Center</Link></li>
                    <li><Link to="">0.00.000.0000</Link></li>
                    <li>Mon - Fri: 9am - 8pm EST</li>
                    <li>Sat - Sun: 9am - 4pm EST</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer