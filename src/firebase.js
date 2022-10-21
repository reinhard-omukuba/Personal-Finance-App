// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDEHSrMqOk7cLzSgiLUt1EpLoB8587GJLM",
  authDomain: "finance-a48a6.firebaseapp.com",
  projectId: "finance-a48a6",
  storageBucket: "finance-a48a6.appspot.com",
  messagingSenderId: "408898392288",
  appId: "1:408898392288:web:b7fdc90b331f5b79780085",
  measurementId: "G-01WP5GBMYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db =getFirestore();

//export
export {app};
export {analytics};
export {db};