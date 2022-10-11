import React from 'react'
import '../css/Landing/BannierSection2.css'
import {Link} from 'react-router-dom'
function BannierSection2() {
  return (
    <div className="bannier-section2">
        <div className="bannier-section2-content">
            <h2>Through Caribou, you could start saving today!</h2>
            <Link to="#">Refinance my loan</Link>
        </div>
    </div>
  )
}

export default BannierSection2