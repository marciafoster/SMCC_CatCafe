// import { useState } from 'react'

import Checkout from './components/Checkout.jsx'
import Navbar from "./components/NavBar.jsx"
import Pricing from "./components/Pricing.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

 

  return (
    <>

    <Router>

    <Checkout />
    <Navbar />

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

