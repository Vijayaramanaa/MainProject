import React from 'react'
import { useUserName } from '../useContaxt/UserName';
import Card from './Card';
import { Link } from 'react-router-dom';
import "./user.scss";



const RoomPg = ()=>{
    const [name] = useUserName();

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

function CreateUser() {
    const [name] = useUserName();
  return (
    <div className='usdiv'>
        <div>
        {
            name ? <RoomPg/> : <Card/>
        }
        </div>
        </div>
  )
}

export default CreateUser