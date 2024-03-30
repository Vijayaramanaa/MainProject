import React, { useCallback, useEffect, useState } from 'react';
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { PiFanFill } from "react-icons/pi";
import { MdOutlineModeFanOff } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { MdLightbulbOutline } from "react-icons/md";
import {useUserName} from "../useContaxt/UserName"
import "./room.scss";
import axios from 'axios';
import { app } from '../Firebase/firebaseconfig';
import { getDatabase, ref, push,get,update } from 'firebase/database';



/************************************************************************* */
const Temperature = ()=>{
  const [temp,setTemp] = useState("0")
  const [city,setCity] = useState("CITY")
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
useEffect(()=>{
  
  getTemperature('VELLORE');
},[])

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
/***********************************************************************************************/
function Room() {
  const [name,setName] = useUserName()
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addLight , setAddLight] = useState({
    Name : "Light",
    OnOff : false,
  })
  const [addFan , setAddFan] = useState({
    Name : "Fan",
    OnOff : false
  })
  const [props,setProps] = useState("")
  const database = getDatabase(app);
  const dbref = ref(database,"Room");
useEffect(()=>{
  const addDataToRoom = async () => {
    try {
      if (props !== "") {
        await push(dbref, props);
        setProps(""); // Assuming you have a state variable named 'setProps' to reset props
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (props !== "") {
    addDataToRoom();
  }

  return () => {
    
  };
}, [props]);
const changeState = useCallback(async(key,device)=>{
  console.log("rendered",key)
  const onf = device.OnOff
  const detail = {
    OnOff : !onf
  }
  const refa = ref(database,`Room/${key}`)
  try{
    await update(refa,detail)
  }catch(error){
    console.log(error.message)
  }

},[])


const getData = useCallback(async ()=>{

  const refa =  ref(database,'Room');
  try{
    const snapshot = await get(refa);
    const value = snapshot.val();
    const formated = Object.entries(value).map(([key,device])=>({
      key,
      device,
    }))
    setData(formated)
  }catch(error){
    console.log(error.message)
  }finally{
    setLoading(false)
  }

},[data])


useEffect(() => {

  getData()

}, [props]);





  {/*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://home-automation-testing-1d160-default-rtdb.firebaseio.com/HA/Room.json');
        const formattedData = Object.entries(response.data).map(([roomName, deviceState]) => ({
          roomName,
          deviceState
        }));
        setData(formattedData);
        console.log(formattedData)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

     fetchData();

    return () => {
      
    };
  }, []);
*/}


  return (
    <div className='containers'>
      <div className='ed'>
        <h1>Welcome <span>Vijay{name.toUpperCase()}</span></h1>
      </div>
      <div className='seperator'>
      <div >
      <Temperature/>
      </div>
      <div className='divsep'>
      <div className='sepOne'>
      <AddDevice addLight={addLight} addFan={addFan} setProps={setProps}/>
      </div>
      <div className='bt'>
        {loading ? (
          <p>Loading...</p>
             ) : error ? (
          <p>Error: {error.message}</p>
             ) : (
              <ul>
            {data.map(( item ) => (
              <div key={item.key}>
                {item.device.Name == "Fan" ?  <div className='li' style={item.device.OnOff ?{ backgroundColor:"#e9ebf2",transition:"2s linear" }:{backgroundColor:"#adb1ba",transition:"2s linear"}} onClick={()=>changeState(item.key,item.device)} >
      <div >{item.device.OnOff ?
        <PiFanFill className='lit' style={{color:"#6aed55",transition:"2s linear"}} />:
        <MdOutlineModeFanOff className='lit' style={{color:"#e7e8cf",transition:"2s linear"}}/>}
      </div>
      <div>
       <h1>SWITCHED <span>{item.device.OnOff ? "ON" : "OFF"}</span> </h1> 
      </div>
    </div> : item.device.Name == "Light" ?  <div className='li' style={item.device.OnOff ?{ backgroundColor:"#e9ebf2",transition:"2s linear" }:{backgroundColor:"#adb1ba",transition:"2s linear"}} onClick={()=>changeState(item.key,item.device)} >
      <div >{item.device.OnOff ?
        <HiLightBulb className='lit' style={{color:"#e4f00e",transition:"2s linear"}}  />:
        <MdLightbulbOutline className='lit' style={{color:"#e7e8cf",transition:"2s linear"}}/>}
      </div>
      <div>
       <h1>SWITCHED <span>{item.device.OnOff ? "ON" : "OFF"}</span> </h1> 
      </div> 
    </div> : <div>{item.device.Name}</div> }

    </div>
               ))}
                    </ul>
         )}
      </div>
      </div>
      </div>
      <div>
      </div>
    </div>

  )
}

export default Room;

const AddDevice = ({addFan,addLight,setProps})=>{
  
    return(
      <div className='controlbtn'>
        <h1>Add Devices</h1>
      <div className='conbtn'>
        <button onClick={()=>setProps(addLight)}>LIGHT <HiLightBulb/></button>
        <button onClick={()=>setProps(addFan)}>FAN <PiFanFill/></button>
        <button>GasSensor</button>
        <button>CamDetector</button>
      </div>
      </div>
    )
}
