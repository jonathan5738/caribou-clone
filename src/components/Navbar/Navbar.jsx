import React, { useState, useRef } from 'react'
import { FiPhone, FiUser, FiMoreHorizontal, FiX, FiChevronDown } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../css/navbar/Navbar.css'

function Navbar() {
 const [showMenu, setShowMenu] = useState(false) 
 const [showNestedMenu, setNestedMenu] = useState(false)
 const nestedMenu = useRef()
 const variants = {
    initial: {x: '-100%'},
    visible: {x: 0}
 }
 const nestedMenuVariants = {
    initial: {opacity: 0, scale: 0.6},
    visible: {opacity: 1, scale: 1}
 }
 const handleNestedMenu = () => {
    nestedMenu.current.classList.toggle('hidden')
    setNestedMenu(prev => !prev)
 }
  return (
    <>
        <section className="navigation">
        <div className="nav-bannier">
             <p className='nav-bannier-info-container'>
                <FiPhone color={'#008765'} size={20} className='phone-icon'/>
                 Talk to our team to start saving 
                 <span className="phone-number">0.000.000.0000</span>
            </p>
            <Link to="#" className='login-user'><FiUser size={20} color={'#008765'}/> <span className="login-text">login</span>
            </Link>
        </div>
        <nav className="navbar">
            <Link to="/" className='logo'>Logo</Link>
            <ul className="menu">
                <li className="menu-item"><Link to="#">Refinance</Link></li>
                <li className="menu-item"><Link to="#">Auto Insurance</Link></li>
                <li className="menu-item"><Link to="#">About Us</Link></li>
                <li className="menu-item"><Link to="#">Resources <FiChevronDown/></Link></li>
            </ul>
            <div className='nav-button-container'>
                <Link to="#" className='get-started-button'>get started</Link>
                <Link to="#" className='nav-mobile-contact-button'><FiPhone size={20} color={"#0075E3"}/></Link>
                <Link to="#" className='nav-mobile-button' onClick={() => setShowMenu(prev => !prev)}><FiMoreHorizontal size={20} color={"#fff"}/></Link>
            </div>
        </nav>
      </section>
      <motion.div className='mobile-nav' variants={variants}
       initial='initial'
       animate={showMenu ? 'visible': ''}
       transition={{ duration: .3}}
      >
             <div className="mobile-navigation">
                 <a href="/" className='mobile-logo'>Logo</a>
                 <div className='nav-mobile-button-container'>
                    <Link to="#" className='mobile-nav-contact'><FiPhone size={20} color={"#0075E3"}/></Link>
                    <Link to="#" onClick={() => setShowMenu(prev => !prev)} className='close-mobile-button'><FiX size={20} color={"#fff"}/></Link>
                 </div>
             </div>
             <div className="mobile-menu-links">
                    <ul className='menu-mobile'>
                        <li className="menu-item-mobile"><Link to="#">Refinance</Link></li>
                        <li className="menu-item-mobile"><Link to="#">Auto Insurance</Link></li>
                        <li className="menu-item-mobile"><Link to="#">About Us</Link></li>
                        <li className="menu-item-mobile">
                          <Link to="#" onClick={handleNestedMenu}>
                            <div className="ressources-link">Resources <FiChevronDown/></div>
                          </Link>
                           <motion.ul className={`nested-mobile-menu hidden`} variants={nestedMenuVariants}
                             ref={nestedMenu}
                             initial='initial'
                             animate={showNestedMenu ? 'visible': ''}
                             transition={{ duration: .3 }}
                           >
                               <li><Link to="#">Resources center</Link></li>
                               <li><Link to="#">Learning library</Link></li>
                               <li><Link to="#">Find savings and buy auto</Link></li>
                               <li><Link to="#">Refinance Calculator</Link></li>
                               <li><Link to="#">FAQs</Link></li>
                           </motion.ul>
                        </li> 
                        <li className='login-mobile'><Link to="#">Login</Link></li>
                    </ul>
            </div>
      </motion.div>
    </>
  )
}

export default Navbar