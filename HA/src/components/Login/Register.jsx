import React, { useEffect, useState } from 'react'
import './login.scss'
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {auth} from "../Firebase/firebaseconfig";
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import 'firebase/firestore';



function Register({lr,setLr}) {
    
    const navigate = useNavigate();

    const toastOption =  {
        position: "top-right", // Position of the toast
        autoClose: 3000, // Auto-close duration in milliseconds
        hideProgressBar: false, // Whether to hide the progress bar
      }

    const [form,setForm] = useState({
        Name : "",
        Mail : "",
        Password : "",
        ConformPass : "",
    })

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const {Name , Mail , Password , ConformPass} = form;
        if(Name === ""){
            toast.error("Name Required",toastOption);
            return false;

        }else if(Mail === ""){
            toast.error("Email Required",toastOption);
            return false;
        }else if(Password != ConformPass){
            toast.error("Password and Confirm Password are different",toastOption);
            return false;
        }
         try {
             
            const userCredential = await createUserWithEmailAndPassword(auth, Mail, Password);
            const user =userCredential.user;
             await updateProfile(user,{
                displayName : Name,
                
            })
            localStorage.setItem("userDetails", JSON.stringify(user))
            
           console.log(user)
           toast.success("Registration successfull",toastOption)
          
        }catch (error){
            toast.error("Registration failed re-try again",error.message,toastOption);
        }finally{
            {
                    navigate.push("/")
                
            }
        }
        


    }
   

  return (
    
<form className='form1' onSubmit={(e)=>handleSubmit(e)}>
    <h1 className='reg'>Register here !</h1>
<div className='crt'>
<div>
    <h1>Name</h1>
    <input type='text' name='Name' placeholder='Name' required value={form.Name} onChange={(e)=>{setForm({...form,Name : e.target.value})}}/>
</div>
<div>
    <h1>Email</h1>
    <input type='email' name='Email' placeholder='Email' required value={form.Mail} onChange={(e)=>{setForm({...form,Mail : e.target.value})}}/>
</div>
<div>
    <h1>Password</h1>
    <input type='password' name='Password' placeholder='Password' required value={form.Password} onChange={(e)=>{setForm({...form,Password : e.target.value})}}/>
</div>
<div>
    <h1>Conform Password</h1>
    <input type='password' name='ConformPassword' placeholder='Confirm Password' required value={form.ConformPass} onChange={(e)=>{setForm({...form,ConformPass: e.target.value})}}/>
</div>
<div className='btn'> 
<button type='submit'>Register</button>
</div>
<div className='acc'>
    <h2>Already have an account? <span onClick={()=>setLr(!lr)}>Log in</span></h2>
</div>
</div>
<ToastContainer/>
</form>

    
  )
}

export default Register