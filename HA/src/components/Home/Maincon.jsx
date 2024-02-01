import React from 'react'
import "./maincon.scss"


function Maincon() {
  return (
    <div className='Section'>
        <div className='cont'> 
        <h1>LIVE LIFE BRILLIANTLY</h1>
        <p>We connect smart devices to work in unison, delivering a truly intelligent smart home experience that makes life more convenient, safe, and enjoyable.</p>
        <img src={"arrow.png"} className='arrow' alt='scrolldown'/>
        
        </div>
        <img className='light' src={"light.png"} alt='light'/>
        <img className='iot2' src={"iot2.png"}/>
    </div>
  )
}

export default Maincon