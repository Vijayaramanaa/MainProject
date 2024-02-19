import React, { useState } from 'react';
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { PiFanFill } from "react-icons/pi";
import { MdOutlineModeFanOff } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { MdLightbulbOutline } from "react-icons/md";
import "./room.scss";



const Light = ()=>{
  const [light,setLight] = useState(false)
  const [lbtn,setLbtn] = useState(false)
  return(
    <div className='li' style={lbtn ?{ backgroundColor:"#e9ebf2",transition:"2s linear" }:{backgroundColor:"#adb1ba",transition:"2s linear"}} onClick={()=>setLbtn(!lbtn)}>
      <div >{lbtn ?
        <HiLightBulb className='lit' style={{color:"#e4f00e",transition:"2s linear"}} />:
        <MdLightbulbOutline className='lit' style={{color:"#e7e8cf",transition:"2s linear"}}/>}
      </div>
      <div>
       <h1>SWITCHED <span>{lbtn ? "ON" : "OFF"}</span> </h1> 
      </div>
    </div>
  )

}
const Fan = ()=>{
  const [fan,setFan] = useState(false)
  const [lbtn,setLbtn] = useState(false)

  return(
    <div className='li' style={lbtn ?{ backgroundColor:"#e9ebf2",transition:"2s linear" }:{backgroundColor:"#adb1ba",transition:"2s linear"}} onClick={()=>setLbtn(!lbtn)}>
      <div >{lbtn ?
        <PiFanFill className='lit' style={{color:"#6aed55",transition:"2s linear"}} />:
        <MdOutlineModeFanOff className='lit' style={{color:"#e7e8cf",transition:"2s linear"}}/>}
      </div>
      <div>
       <h1>SWITCHED <span>{lbtn ? "ON" : "OFF"}</span> </h1> 
      </div>
    </div>
  )
}
const Temperature = ()=>{
  const [temp,setTemp] = useState("0")
  const [city,setCity] = useState("VLR")
  function getTemperature(city) { 
    const apiKey = 'f5e8cb72c24a1be482992dc59e465c9d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Extracting temperature from the API response
            const temperature = data.main.temp;
            setTemp(temperature)
            setCity(city)
            console.log(`Temperature in ${city}: ${temperature}°C`);
        })
        .catch(error => {
            console.error('There was a problem fetching the temperature:', error);
        });
}

getTemperature('VELLORE');
return(
  <div className='temper'>
    <div className='divo'>
    <h1>Temperature</h1>
    <FaTemperatureThreeQuarters className='ticon'/>
    </div>
    <div className='divt'>
      <h2>{city}</h2>
      <h2>{temp}&deg;C</h2>
    </div>
  </div>
)

}

function Room() {
  return (
    <div className='containers'>
      <div className='ed'>
        <h1>Welcome <span>Vijay</span>!!</h1>
      </div>
      <div className='tp'>
      <Temperature/>
      </div>
      <div className='bt'>
      <Light/>
       <Fan/>
      </div>
    </div>
  )
}

export default Room