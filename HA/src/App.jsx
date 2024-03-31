import { useContext, useEffect, useState} from 'react'
import './App.scss'
import LoginForm from './components/Login/LoginForm.jsx'
import { Routes , Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Profile from './components/Profile/Profile.jsx'
import {username,useUserName} from "./components/useContaxt/UserName.js"
import Room from './components/UserRoom/Room.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './components/Firebase/firebaseconfig.js'
import HomeScreen from './components/Camera/HomeScreen.jsx'
import Pagenotfount from './components/PNF/Pagenotfount.jsx'

function App() {
  const [name,setName] = useState("")
  const [mail,setMail] = useState("")

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if (user){
          const email = user.email|| "email not found" 
          setMail(email)
      const displayName = user.displayName ||"User"
      setName(displayName)
      }
    })
  },[])
  return(
    <username.Provider value={[name ,setName]}>
    <Routes>
    <Route path='lg' element={<LoginForm/>}/>
    <Route path='/' element={<Home mail={mail}/>} />
    <Route path='Profile' element={<Profile/>}/>
    <Route path='room' element={<Room/>}/>
    <Route path='camera' element={<HomeScreen/>}/>
    <Route path='*' element={<Pagenotfount/>}/>
    </Routes>
    </username.Provider>
   
  )
}

export default App
