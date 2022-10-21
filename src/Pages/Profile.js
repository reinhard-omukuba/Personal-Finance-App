import React, { useState } from 'react'
import LeftNav from '../Components/LeftNav'
import NavBar from '../Components/NavBar'
import Button from 'react-bootstrap/Button';


//firebase
import '../firebase';
import {db} from '../firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";


function Profile() {


  const auth = getAuth();
  const [userName, setuserName] = useState();
  const [userEmail, setuserEmail] = useState();

  //get the currenttly signed in user
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //get the user's id
      const uid = user.uid;

      //get information from firestore that corresponds with the above user id
      const q = query(collection(db, "users"), where("userid", "==", uid));
      getDocs(q).then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
         
          const username = doc.data().username;
          const userEmail = doc.data().email;

          setuserName(username);
          setuserEmail(userEmail);
         
        });
      })
      
      
    } else {
      // User is signed out
    }
  });



  return (
    <div className='dashboard'>
        <LeftNav/>

        <div className='workArea'>
            <NavBar/>

            <div className='mainContent'>
                <h2>My Account</h2>

                <div className='profCont'>
                  <div className='profPicCont'></div>
                  <h3>{userName}</h3>
                  <p>{userEmail}</p>
                  <Button>SignOut</Button>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Profile