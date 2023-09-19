import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Checkout from "./components/Checkout.jsx";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Adopt from "./components/Adopt.jsx";
import CatsList from "./components/CatsList.jsx";
import Cart from "./components/Cart.jsx";
import ErrorPage from "./components/ErrorPage.jsx"; 

function App() {
    const [cart, setCart] = useState([]);
    const [showCatsList, setShowCatsList] = useState(false);

    const handleCart = (breedObj) => {
        if (cart.some((item) => item.id === breedObj.id)) {
            alert("You have already added this breed to the cart");
            return;
        }
        setCart([...cart, breedObj]);
    };

    const toggleCatsList = () => {
        setShowCatsList(!showCatsList);
    };

    return (
      <Router>
      {/* <Checkout /> */}
      <NavBar showCatsList={showCatsList} toggleCatsList={toggleCatsList} cart={cart} />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/adopt" element={showCatsList ? <CatsList cart={cart} setCart={setCart} /> : <Adopt />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
  <Route path="/catslist" element={<CatsList cart={cart} setCart={setCart} />} />
  <Route path="/checkout" component={Checkout} />
                <Route path="/error" component={ErrorPage} />
                {/* <Route path="/success" component={SuccessPage} />  */}
          
</Routes>

                
    </Router>
    
    );
}

export default App;
