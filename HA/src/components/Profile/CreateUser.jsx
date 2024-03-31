import React, { useEffect, useState } from 'react'
import { useUserName } from '../useContaxt/UserName';
import Card from './Card';
import { Link } from 'react-router-dom';
import "./user.scss";
import { getDatabase,get,ref } from 'firebase/database';
import { app } from '../Firebase/firebaseconfig';



const RoomPg = ()=>{

    return(
        <div className='romdiv'>
            <div className='box'>
            <h1>Hello {name.toUpperCase()}</h1>
            <h2>Go to your room</h2>
           <Link to="room" >
           <h3>Tap here</h3>
            </Link>
            </div>
        </div>
    )
}

function CreateUser({mail}) {
    const [name] = useUserName();
    const [val,setVal] = useState(null)

    const getData = async()=>{
        const database = getDatabase(app);
        const dbRef = ref(database,`UserDetail/ajhay@gmail`);
        const snap = await get(dbRef)
        const value = snap.val()
        setVal(value)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div className='usdiv'>
        <div>
        {
            val ? <RoomPg/> : <Card mail={mail}/>
        }
        </div>
        </div>
  )
}

export default CreateUser