import React,{useState,useEffect} from 'react';
import { onAuthStateChanged} from "firebase/auth";
import { auth } from '../Firebase/firebaseconfig';
import { getDatabase , get, ref } from 'firebase/database';
import { app} from '../Firebase/firebaseconfig';
import { CgProfile } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import stars from "../../../public/stars.png";
import stlight from "../../assets/stlight.png";
import {useUserName} from "../useContaxt/UserName"


function Profile() {
  const [displayName,setDisplayName] = useState("")
  const [displayemail,setDisplayemail] = useState("")
  const [data,setData] = useState([])

  const history = useNavigate()
  useEffect(()=>{

    onAuthStateChanged(auth,(user)=>{
      if (user){
      const email = user.email|| "email not found"
      setDisplayemail(email);
      const displayName = user.displayName ||"User"
      setDisplayName(displayName);
      }
    })

    const fetchData = async()=>{
      try{
        const database =  getDatabase(app);
        const refa = ref(database,"UserDetail/ajhay@gmail");
        const snapshot = await get(refa);
        const value = snapshot.val();
        const ans = Object.entries(value).map(([key,val])=>({
          key,
          val
        }))
        
          setData(ans);
          
          

      }catch (error){
        console.error(error.message)
      }
    }
    fetchData();

  },[])
  const name =  data.map((item)=>item.val.Wifi)
  

  return (
    <form className='frm'>
      <div>
      <CgProfile className='profile' />
      </div>
        <div>
            <h1> NAME : {displayName.toUpperCase()}</h1>   
        </div>
        <div>
        <h2>Email : {displayemail}</h2>
        </div>
        <div>
        <h1>WIFI : {data? <>{name}</>:<>NA</>}</h1> 
        </div>
        <div onClick={()=>history(-1)}><MdCancel className='cancel' /></div>
        <img src={stlight} className='stlight'/>
        <img src={stlight} className='stlightR'/>
        <img src={stars} className='star'/>
    </form>
  )
}

export default Profile