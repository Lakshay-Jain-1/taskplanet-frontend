import { useState } from 'react'
import './App.css'
import Header from './shared/components/Header'
import Home from './modules/Home/pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width:"422px",height:"100vh",border:"2px solid black"}}> 
     <Header/>
     <Home />
    </div>
  )
}

export default App
