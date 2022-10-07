import React from 'react'
import { BiCheckCircle } from "react-icons/bi"
import '../css/AdvantageSection/AdvantageSection.css'
function AdvantageSection() {
  return (
    <div className="advantages">
        <p><BiCheckCircle size={30} color={'#0075E3'}/>credit score</p>
        <p><BiCheckCircle size={30} color={'#0075E3'}/> No hidden fees</p>
        <p> <BiCheckCircle size={30} color={'#0075E3'}/> No SSN required ++</p>
    </div>
  )
}

export default AdvantageSection