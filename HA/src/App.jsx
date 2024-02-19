import { useState } from 'react'
import './App.scss'
import LoginForm from './components/Login/LoginForm.jsx'
import { Routes , Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  return(
    
    <Routes>
    <Route path='lg' element={<LoginForm/>}/>
    <Route path='/' element={<Home/>} />
    </Routes>
   
  )
}

export default App
