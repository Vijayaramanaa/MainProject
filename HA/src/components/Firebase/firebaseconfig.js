
import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth";
import 'firebase/firestore';
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAZ1Mh_VsmPkypnvKfOuN-59hUFPWyPDCI",
  authDomain: "homeauto-f3144.firebaseapp.com",
  projectId: "homeauto-f3144",
  storageBucket: "homeauto-f3144.appspot.com",
  messagingSenderId: "888383145805",
  appId: "1:888383145805:web:e28d9d6fec7f663d245904",
  measurementId: "G-2180RC7N1D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)
