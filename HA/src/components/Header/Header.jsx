import React,{useState,useEffect,useRef} from 'react'
import './header.scss'
import { useNavigate,Link } from 'react-router-dom';
import { auth } from '../Firebase/firebaseconfig';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from '../Profile/Profile';

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
      localStorage.removeItem("userDetails")
      navi("/lg")
    } catch (error) {
      toast.error('Logout failed', toastOption);
    }
  };

  return (
    <div className='logout' >
      <Link to="profile" ><h5>GO to Profile</h5></Link>
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
        <button className='phone'> ^ </button>
        {showLogOut ? <Logout/>: null}
        <ToastContainer/>
        </header> 
  
  )
}

export default Header