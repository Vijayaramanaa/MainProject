import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/firebaseconfig';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login({setLr,lr}) {
    const navigate = useNavigate()
    const [Email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const toastOption =  {
      position: "top-right", // Position of the toast
      autoClose: 3000, // Auto-close duration in milliseconds
      hideProgressBar: false, // Whether to hide the progress bar
    }
    

    const handleLogin = async (e) => {
      
        e.preventDefault();
        try {
          const userdetail = await signInWithEmailAndPassword(auth,Email, password);
          toast.success('Login successful',toastOption);
          if(!localStorage.getItem("userDetails")){
            localStorage.setItem("userDetails",JSON.stringify(userdetail))
          }
          navigate("/")

        } catch (error) {
          toast.error('Login failed',toastOption);
          console.log(error.message)
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
        <ToastContainer/>
        
</div>
</form>
  )
}

export default Login