import React,{useState,useEffect} from 'react';
import { onAuthStateChanged} from "firebase/auth";
import { auth } from '../Firebase/firebaseconfig';
import { getDatabase, ref , get } from 'firebase/database';
import { app} from '../Firebase/firebaseconfig';

function Profile() {
  const [displayName,setDisplayName] = useState("")
  const [displayemail,setDisplayemail] = useState("")

  const database = getDatabase(app);
  const dbRef = ref(database,"UserDetail");
  useEffect(()=>{

    onAuthStateChanged(auth,(user)=>{
      if (user){
      const email = user.email || "abc@gmail.com"
      setDisplayemail(email);
      }else{
        setDisplayName("Wellcome User ")
        setDisplayemail("email not found");
      }
    })

    const fetchData = async()=>{
      try{
         const snapshot = await get(dbRef);
         if(snapshot.exists()){
            const data = snapshot.val();
            setDisplayName(data);
         }else{
          console.log("not exist in db")
         }

      }catch (error){
        console.error(error.message)
      }
    }
    fetchData();

  },[])
  return (
    <form>
        <div>
            <h1>{displayName.data}</h1>
            <h2>{displayemail}</h2>
            
        </div>
    </form>
  )
}

export default Profile