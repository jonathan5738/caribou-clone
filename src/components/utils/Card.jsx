import React from 'react'
import { FiAward, FiMapPin } from "react-icons/fi"
import { motion } from 'framer-motion'
import '../css/utils/Card.css'

function Card({content, author, location}) {
  const cardVariants = {
        initial: {scale: 1},
        animation: {scale: 1.1}
   }
  return (
    <motion.div className="card" 
      variants={cardVariants}
      initial='initial'
      whileHover='animation'
      transition={{ease: 'easeInOut', duration: .3}}
    >
        <div className="card-content">
            <p className="award-icon">
                <FiAward size={20} fill={"#07ce9c"} color={"#008765"}/>
                <FiAward size={20} fill={"#07ce9c"} color={"#008765"}/>
                <FiAward size={20} fill={"#07ce9c"} color={"#008765"}/>
                <FiAward size={20} fill={"#07ce9c"} color={"#008765"}/>
            </p>
            <p>{content}</p>
            <div className="author-info">
                <p className='author-name'>{author}</p>
                <p className="author-location">
                    <FiMapPin/> {location}
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default Card