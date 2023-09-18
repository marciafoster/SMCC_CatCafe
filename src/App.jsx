import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./assets/Card"
import Cart from "./assets/Cart"
import CatsApi from "./assets/CatsApi"
import CatsList from "./assets/CatsList"






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
    <div className="container">
      <aside>
        {/* <Cart breed={breed} cart={cart} setCart={setCart} /> */}
      </aside>
    </div> 
      
    
        {/* < Card breed={breed} cart={cart} handleCart={handleCart} /> */}
        < CatsList />
      
    </>
  )
}

export default App
