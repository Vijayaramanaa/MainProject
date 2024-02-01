import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Maincon from './Maincon'


function Home() {
  return (
    <>
    <section>
      <Header/> 
      <Maincon/>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  )
}

export default Home