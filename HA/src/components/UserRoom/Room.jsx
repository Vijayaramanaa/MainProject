import React, { useContext, useEffect, useState } from 'react';
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { PiFanFill } from "react-icons/pi";
import { MdOutlineModeFanOff } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { MdLightbulbOutline } from "react-icons/md";
import {useUserName} from "../useContaxt/UserName"
import "./room.scss";
import { createContext } from 'react';



const Light = ({light,setLight})=>{
 
  const [lbtn,setLbtn] = useState(false)

  const handleOnOff = (id)=>{
   
    setLbtn(!lbtn)
    setLight(()=>light.map(lit=>{
      if(lit.id === id){
        return {
          ...lit, OnOff : !lit.OnOff
        }
      }
      return lit;
      
    }))
  }
 
  
  return(
    <div>
    {light.map((item,index)=>
    <div className='li' style={item.OnOff ?{ backgroundColor:"#e9ebf2",transition:"2s linear" }:{backgroundColor:"#adb1ba",transition:"2s linear"}} onClick={()=>handleOnOff(item.id)}key={index}>
      <div >{item.OnOff ?
        <HiLightBulb className='lit' style={{color:"#e4f00e",transition:"2s linear"}} />:
        <MdLightbulbOutline className='lit' style={{color:"#e7e8cf",transition:"2s linear"}}/>}
      </div>
      <div>
       <h1>SWITCHED <span>{item.OnOff ? "ON" : "OFF"}</span> </h1> 
      </div> 
    </div>)}
    </div>
  )

}
const Fan = ({fan,setFan})=>{
 
  const [lbtn,setLbtn] = useState(false)
  const handleOnOff = (id)=>{
    
    setLbtn(!lbtn)
    setFan(()=>fan.map(lit=>{
      if(lit.id === id){
        return {
          ...lit, OnOff : !lit.OnOff
        }
      }
      return lit;
      
    }))
  }
  return(
    <div>
      {fan.map((item,index)=>
    <div className='li' style={item.OnOff ?{ backgroundColor:"#e9ebf2",transition:"2s linear" }:{backgroundColor:"#adb1ba",transition:"2s linear"}} onClick={()=>handleOnOff(item.id)}key={index}>
      <div >{item.OnOff ?
        <PiFanFill className='lit' style={{color:"#6aed55",transition:"2s linear"}} />:
        <MdOutlineModeFanOff className='lit' style={{color:"#e7e8cf",transition:"2s linear"}}/>}
      </div>
      <div>
       <h1>SWITCHED <span>{item.OnOff ? "ON" : "OFF"}</span> </h1> 
      </div>
    </div>)}
    </div>
  )
}
const Temperature = ()=>{
  const [temp,setTemp] = useState("0")
  const [city,setCity] = useState("CITY")
  function getTemperature(city) { 
    const apiKey = 'f5e8cb72c24a1be482992dc59e465c9d00';
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
  const [name,setName] = useUserName()
  const [light,setLight] = useState([
    {
      id: 1,
      Name : "Light",
      OnOff : false,
    }  
  ])
  const [fan,setFan] = useState([
    {
      id: 1,
      Name : "Fan",
      OnOff : false,
    }
  ])
  return (
    <div className='containers'>
      <div className='ed'>
        <h1>Welcome <span>{name.toUpperCase()}</span>!!</h1>
      </div>
      <div className='seperator'>
      <div >
      <Temperature/>
      </div>
      <div className='divsep'>
      <div className='sepOne'>
      <AddDevice setLight={setLight} setFan={setFan}/>
      </div>
      <div className='bt'>
      <Light light={light} setLight={setLight}/>
       <Fan fan={fan} setFan={setFan}/>
      </div>
      </div>
      
      </div>
    </div>

  )
}

export default Room;

const AddDevice = ({setLight,setFan})=>{
  
  const addLight = ()=>{
    setLight((prev)=>[
      ...prev,{
        id: 2,
        Name : "Light",
        OnOff : false,
      }
    ] )
  }
  const addFan = ()=>{
    setFan((prev)=>[
      ...prev,{
        id: 2,
        Name : "Light",
        OnOff : false,
      }
    ] )
  }
    return(
      <div className='controlbtn'>
        <h1>Add Devices</h1>
      <div>
        <button onClick={()=>addLight()}>LIGHT <HiLightBulb/></button>
        <button onClick={()=>addFan()}>FAN <PiFanFill/></button>
        <button>GasSensor</button>
        <button>CamerSensor</button>
      </div>
      </div>
    )
}
