import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Maincon from './Maincon'
import Profile from '../Profile/Profile'
import Card from '../Profile/Card'
import "./maincon.scss"
import Room from '../UserRoom/Room'
import CreateUser from '../Profile/CreateUser'
import { useNavigate } from 'react-router-dom'


function Home({mail}) {
  const navi = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("userDetails")){
      navi("/lg")
    }
  },[])

  return (
    <div className='Section'>
    <section>
      <Header/> 
      <Maincon/>
      </section>
      <section>
        <CreateUser mail={mail}/>
      </section>
      <section>
        <Footer/>
        </section>
    </div>
  )
}

export default Home