// import { useState } from 'react'

import Checkout from './Components/Checkout.jsx'
import Navbar from "./Components/Navbar.jsx"
import Pricing from "./Components/Pricing.jsx"
import Home from "./Components/Home.jsx"
import About from "./Components/About.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

 

  return (
    <>

    <Router>

    < Checkout />
    < Navbar />

     <Routes>
       <Route path="/Home" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/pricing" element={<Pricing />} />

     </Routes>

    </ Router>
    
    

    </>
  )
}

export default App

