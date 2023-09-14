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

const url = 'https://cat-breeds.p.rapidapi.com/cat_breeds';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '06dac55145msh43ca0f365b5b73cp138cdfjsn37f31adbc82f',
		'X-RapidAPI-Host': 'cat-breeds.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	 console.log(result);
} catch (error) {
	console.error(error);
}




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

