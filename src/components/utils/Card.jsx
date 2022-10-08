import React from 'react'
import { FiAward, FiMapPin } from "react-icons/fi"
import '../css/utils/Card.css'

function Card({content, author, location}) {
  return (
    <div className="card">
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
    </div>
  )
}

export default Card