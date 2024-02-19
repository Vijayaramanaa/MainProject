import React,{useState} from 'react'
import { FaEye ,FaEyeSlash } from "react-icons/fa";
import "./profile.scss";
import { getDatabase, ref, push } from 'firebase/database';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {app} from "../Firebase/firebaseconfig"

function Card() {
    const [detail,setDetail] = useState({
        Name : "",
        Wifi : "",
        Password :"",
    })
    const toastOption =  {
        position: "top-right", // Position of the toast
        autoClose: 3000, // Auto-close duration in milliseconds
        hideProgressBar: false, // Whether to hide the progress bar
      }
      const handleSubmit = async(e)=>{
          e.preventDefault();
        const database = getDatabase(app);
        const dbRef = ref(database,'UserDetail');
        
        try{
            await push(dbRef , detail);
            setDetail({
                Name : "",
                Wifi : "",
                Password : "",

            })
            toast.success("Data sent successfully",toastOption)
        }catch (error){
            toast.error("Failed to Send",toastOption);
            console.log(error.message);
        }   
    };

 const [seePass,setseePass] = useState(true)
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
        <div className='Container'>
        <div className='nana'>
        <label >
            Name
        </label>
        <input placeholder='Name' type='text' name='Name' value={detail.Name} onChange={(e)=>setDetail({...detail,Name:e.target.value})}/>
        </div>
        <div className='nana'>
        <label>
            wifi Name or ID
        </label>
        <input placeholder="name"  type='text' name='Wifi' value={detail.Wifi} onChange={(e)=>setDetail({...detail,Wifi:e.target.value})}/>
        </div>
        <div className='nana'>
        <label className='lab'>
            Password 
        </label>
        <div>
        <input className='int' placeholder='Password' type={seePass?"password" : "text"} name='Password' value={detail.Password} onChange={(e)=>setDetail({...detail,Password:e.target.value})}/>
        <button onClick={()=>setseePass(!seePass)}>{seePass?<FaEyeSlash />:<FaEye />}</button></div>
        </div>
        <div>
            <button className='btn' type='submit'>Submit</button>
        </div>
        </div>
        <ToastContainer/>
    </form>
  )
}

export default Card