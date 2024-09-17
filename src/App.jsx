import { useState } from 'react'
import './App.css'
import Header from './shared/components/Header'
import Home from './modules/Home/pages/Home'
import { Routes ,Route, Navigate} from 'react-router-dom'
import NavBar from './shared/components/NavBar'
import Tasks from './modules/Tasks/pages/Tasks'
import Admin from './modules/Admin/page/Admin'


function App() {
  const [count, setCount] = useState(0)
   
  return (
    <div style={{width:"422px",minHeight:"100vh",position:"relative"}}> 
  
     <Header/>
     <Routes>
     <Route path="/" element={<Navigate to="/home" />}/>
     <Route path="/home" element={<Home/>}  />
     <Route path="/task/:id" element={ <Tasks/>}  />
     <Route path="/admin" element={ <Admin/>}  />
     <Route path="/:notConstructed" element={ "Work under Progress" }  />

     </Routes>
     <NavBar/>
    </div>
  )
}

export default App
