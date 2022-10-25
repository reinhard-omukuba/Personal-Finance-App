import React, { useState } from 'react'
import LeftNav from '../Components/LeftNav'
import NavBar from '../Components/NavBar'
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";


//firebase
import '../firebase';
import {db} from '../firebase'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";


function Profile() {


  const auth = getAuth();
  const navigate = useNavigate();
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
      navigate("/")
    }
  });

  //signout the user
  function logOut(){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/")
    });
  }



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
                  <Button onClick={logOut}>SignOut</Button>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Profile