import React,{useState,useEffect,useRef} from 'react'
import './header.scss'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/firebaseconfig';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
    
    const navi = useNavigate();
    const toastOption =  {
        position: "top-right", // Position of the toast
        autoClose: 3000, // Auto-close duration in milliseconds
        hideProgressBar: false, // Whether to hide the progress bar
      }
  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success('Logout successful',toastOption),navi("/lg",{replace:true});
    } catch (error) {
      toast.error('Logout failed', toastOption);
    }
  };

  return (
    <div className='logout'>
      <h1>Hello !</h1>
      <button onClick={handleLogout}>Logout</button>
      
    </div>
  );
};


function Header() {

    const [showLogOut , setshowLogOut] = useState(false)
    const handClicked = ()=>{
            setshowLogOut(!showLogOut)
    }
 

  return (
    <header className='header' >
        <div className='head'> 
        <div className='left'>
            <ul >
                <li>Home</li>
                <li>About</li>
                <li>FAQS</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='middle'>
            <h1>SmartHome</h1>
        </div>
        <div className='right'>
            <button onClick={()=>handClicked()}>Profile</button>
        </div>
        </div>
        {showLogOut ? <Logout/>: null}
        <ToastContainer/>
    </header>
  )
}

export default Header