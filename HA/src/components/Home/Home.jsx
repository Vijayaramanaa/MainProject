import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Maincon from './Maincon'
import Profile from '../Profile/Profile'
import Card from '../Profile/Card'
import "./maincon.scss"
import Room from '../UserRoom/Room'


function Home() {
  return (
    <div className='Section'>
    <section>
      <Header/> 
      <Maincon/>
      </section>
      <section>
        <Footer/>
        </section>
        <section>
       <Card/>
       </section>
       <section>
       <Profile/>
      </section>
      <section>
        <Room/>
      </section>
    </div>
  )
}

export default Home