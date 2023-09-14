import { useState } from 'react';
import './App.css';
import Checkout from './Components/Checkout.jsx';
import ErrorPage from './Components/ErrorPage';

function App() {
  const [hasError, setHasError] = useState(false);
  const simulateError = () => {
    setHasError(true);
  };

  return (
    <>
      < Checkout />
    </>
  )
}

export default App

