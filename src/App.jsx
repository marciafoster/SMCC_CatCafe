<<<<<<< HEAD
// import { useState } from 'react'

import Checkout from './components/Checkout.jsx'
import Navbar from "./components/NavBar.jsx"
import Pricing from "./components/Pricing.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
=======
import { useState } from 'react';
import './App.css';
import Checkout from './Components/Checkout.jsx';
// import ErrorPage from './Components/ErrorPage';
>>>>>>> bd65c7c86bc59b2230c480aa2871d4d8274f3c2f

function App() {

  return (
    <>
<<<<<<< HEAD

    <Router>

    <Checkout />
    <Navbar />

    <Routes>
       <Route path="/Home" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/pricing" element={<Pricing />} />

     </Routes>

    </ Router>
    
    

=======
      < Checkout />
>>>>>>> bd65c7c86bc59b2230c480aa2871d4d8274f3c2f
    </>
  )
}

export default App

