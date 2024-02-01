// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const database = getAuth(app)