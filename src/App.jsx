import { useState } from 'react'
import './App.css'
import Checkout from './assets/Checkout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Checkout />
    </>
  )
}

export default App
