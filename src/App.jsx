import { useState } from 'react'
import './App.css'
import Checkout from './Components/Checkout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Checkout />
    </>
  )
}

export default App
