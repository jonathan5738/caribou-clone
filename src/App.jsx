import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Refinance from './components/Refinance/Refinance'

import './components/css/variables.css'
import './components/css/general.css'

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/refinance" element={<Refinance/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App