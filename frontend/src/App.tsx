import { useState } from 'react'
import './App.css'
import Welcome from './pages/Welcome'
import Navbar from './components/header/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
      <Welcome />
    </>
  )
}

export default App
