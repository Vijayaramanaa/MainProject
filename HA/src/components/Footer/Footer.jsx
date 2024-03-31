import React from 'react'
import "./footer.scss"


function Footer() {
  const mailAddress ="Vijayaramanaa207320@gmail.com"
  const cd = new Date()
  const year = cd.getFullYear()
  return (
    <footer>
      <div className='containere'>
      <div className='dd'>
        <div className="dOne">
            <h1>SmartHome</h1>
            <p>Innovation in you , control all devices within your finger tip . Make smart work than hard work .control in your hand just relax...</p>

        </div>
        <div className="dTwo">
            <h1>Project Contributers</h1>
           <ul> <a href={`mailto:${mailAddress}`}><li> Ajhay N</li> </a>
            <a href={`mailto:${mailAddress}`}><li> Vijayaramanaa L G</li></a>
            <a href={`mailto:${mailAddress}`}><li>Prasanth P</li></a>
            <a href={`mailto:${mailAddress}`}><li>Rasool Sheriff K </li></a> </ul>
            <p>Any query contact us</p>

        </div>
        </div>
        <div className="dThree">
            <h1>&copy; Copyright All Rights Reserved {year} </h1>
        </div>
        
        </div>
    </footer>
  )
}

export default Footer