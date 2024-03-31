
import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth";
import 'firebase/firestore';
import "firebase/database"
import { getDatabase } from "firebase/database";

/*const firebaseConfig = {
  apiKey: "AIzaSyByj9rW5VhSEy8lo4r6tVvzuBcZOcZZGy4",
  authDomain: "home-automation-testing-1d160.firebaseapp.com",
  databaseURL: "https://home-automation-testing-1d160-default-rtdb.firebaseio.com",
  projectId: "home-automation-testing-1d160",
  storageBucket: "home-automation-testing-1d160.appspot.com",
  messagingSenderId: "231831970402",
  appId: "1:231831970402:web:dc1c47b3ee4b17ff5de73b",
  measurementId: "G-6T6CK6436Q"
};*/
const firebaseConfig = {
  apiKey: "AIzaSyAZ1Mh_VsmPkypnvKfOuN-59hUFPWyPDCI",
  authDomain: "homeauto-f3144.firebaseapp.com",
  databaseURL: "https://homeauto-f3144-default-rtdb.firebaseio.com",
  projectId: "homeauto-f3144",
  storageBucket: "homeauto-f3144.appspot.com",
  messagingSenderId: "888383145805",
  appId: "1:888383145805:web:e28d9d6fec7f663d245904",
  measurementId: "G-2180RC7N1D"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)
