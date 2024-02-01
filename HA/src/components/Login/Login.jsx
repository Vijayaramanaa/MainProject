import React, { useState } from 'react'
import { database } from '../Firebase/firebaseconfig';

function Login({setLr,lr}) {
    const [Email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await auth.signInWithEmailAndPassword(Email, password);
          console.log('Login successful');
        } catch (error) {
          console.error('Login failed', error.message);
        }
      };
  return (
    <form className='form1' onSubmit={(e)=>handleLogin(e)}>
    <h1 className='reg'>Login here !</h1>
    <div className='crt1'>
        <div>
            <h1>Email</h1>
            <input type='email' placeholder='Email' required value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div>
            <h1>Password</h1>
            <input type='password' placeholder='Password' required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div>
            <p>Forgot Password?</p>
        </div>
       
        <div className='btn'> 
        <button type='submit'>Login</button>
        </div>
        <div className='acc'>
            <h2>Create an Account? <span onClick={()=>setLr(!lr)}>Register</span></h2>
        </div>
        
</div>
</form>
  )
}

export default Login