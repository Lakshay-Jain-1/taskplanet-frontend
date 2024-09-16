import { useState } from 'react'
import './App.css'
import Header from './shared/components/Header'
import Home from './modules/Home/pages/Home'
import { Routes ,Route} from 'react-router-dom'
import NavBar from './shared/components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width:"422px",minHeight:"100vh",border:"2px solid black"}}> 
     <Header/>
     <Routes>
     <Route path="/" element={<Home/>}  />
     <Route path="/tasks" element={ <> </>}  />
     </Routes>
     <NavBar/>
    </div>
  )
}

export default App
