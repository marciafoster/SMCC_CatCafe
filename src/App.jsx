
import Nav from "./components/Navbar"
import Pricing from "./components/Pricing"
import Home from "./components/Home"
import About from "./components/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles.css'



function App() {

 

  return (
   

    <Router>  

      <Nav />
        <Routes>
        <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
     </Router>
      
    
      
    )
  }

export default App

