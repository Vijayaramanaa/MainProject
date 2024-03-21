import { useContext, useState} from 'react'
import './App.scss'
import LoginForm from './components/Login/LoginForm.jsx'
import { Routes , Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Profile from './components/Profile/Profile.jsx'
import {username,useUserName} from "./components/useContaxt/UserName.js"
import Room from './components/UserRoom/Room.jsx'


function App() {
  const [name,setName] = useState("")

  return(
    <username.Provider value={[name ,setName]}>
    <Routes>
    <Route path='lg' element={<LoginForm/>}/>
    <Route path='/' element={<Home/>} />
    <Route path='Profile' element={<Profile/>}/>
    <Route path='room' element={<Room/>}/>
    </Routes>
    </username.Provider>
   
  )
}

export default App
