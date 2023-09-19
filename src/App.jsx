import { useState, useEffect } from 'react'
import About from "./components/About.jsx"
import Checkout from "./components/Checkout.jsx"
import ErrorPage from "./components/ErrorPage.jsx"
import Home from "./components/Home.jsx"
import NavBar from "./components/NavBar.jsx"
import Pricing from "./components/Pricing.jsx"
import './App.css'
import Cart from "./components/Cart"
import CatsApi from "./components/CatsApi"
import CatsList from "./components/CatsList"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';






// const url = 'https://cat-breeds.p.rapidapi.com/cat_breeds';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '06dac55145msh43ca0f365b5b73cp138cdfjsn37f31adbc82f',
// 		'X-RapidAPI-Host': 'cat-breeds.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const data = await response.json();
// 	 console.log(data);
// } catch (error) {
// 	console.error(error);

// }







function App() {
  const [count, setCount] = useState(0)
  const [breed, setBreed] = useState(null)
  const [cart, setCart] = useState([])

  const handleCart =(breed) => {
    if (cart.includes(breed)) {
      alert ("You have already added this breed to the cart")
      return
    }
    setCart([...cart, breed])
  }
  function reset() {
    setCart([])
  }

  return (
    <>
     <>

<Router>

<Checkout />
<NavBar />
 < CatsList />
<Routes>
   <Route path="/Home" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/pricing" element={<Pricing />} />
   <Route path="/catsapi" element={<CatsList />} />


 </Routes>

</ Router>



</>
    <div className="container">
      <aside>
        {/* <Cart breed={breed} cart={cart} setCart={setCart} /> */}
      </aside>
    </div> 
      
    
        {/* < Card breed={breed} cart={cart} handleCart={handleCart} /> */}
       
      
    </>

    
  )
}

export default App
