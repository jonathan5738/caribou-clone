import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import './components/css/variables.css'
import './components/css/general.css'

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Landing/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App