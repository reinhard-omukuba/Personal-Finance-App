import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

//firebase
import '../firebase';
import {db} from '../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 


function Register() {

  //Intanciating items
  const email = useRef();
  const password = useRef();
  const fullName = useRef();
  const auth = getAuth();
  const navigate = useNavigate();


  function signUpUser(){
    const emailRef = email.current.value;
    const passwordRef = password.current.value;
    const userName = fullName.current.value;

    //create user with email and password
    createUserWithEmailAndPassword(auth, emailRef, passwordRef)
    .then((userCredential) => {

      //user is now created successfully
      const user = userCredential.user;
      const userId =  user.uid;
      // now send data to firestore
      setDoc(doc(db, "users", userId), {
        username: userName,
        email: emailRef,
        userid: userId
      }).then(()=>{
        navigate("/dashboard");
      })
      

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..

      swal("Sign Up error!", errorMessage, "warning");

    });

  }


  return (
    <div className='loginPage'>

      <div className='loginRight'>

        <div className='formCont'>
          <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" className='mb-3' ref={fullName} />

          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={email} />
          <Form.Text className="text-muted">
          We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" ref={password} />
          </Form.Group>

          <br/>
          <Button variant="primary" type="submit" onClick={signUpUser}>
              Sign Up
          </Button>
          <br/> <br/>
          <p>Already have an account? <Link to="/">Sign In</Link></p>
        </div>

      </div>

      
      <div className='loginLeft'></div>


    </div>
  )
}

export default Register