import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Maincon from './Maincon'
import Profile from '../Profile/Profile'
import Card from '../Profile/Card'
import "./maincon.scss"
import Room from '../UserRoom/Room'
import CreateUser from '../Profile/CreateUser'


function Home() {
  return (
    <div className='Section'>
    <section>
      <Header/> 
      <Maincon/>
      </section>
      <section>
        <CreateUser/>
      </section>
      <section>
        <Footer/>
        </section>
    </div>
  )
}

export default Home