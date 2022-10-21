import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link , useNavigate} from "react-router-dom";

//firebase
import '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {

  const userEmail = useRef();
  const userPassword = useRef();
  const auth = getAuth();
  const navigate = useNavigate();


  function signInUser(){
    //getting data from the input
    const email = userEmail.current.value;
    const password = userPassword.current.value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      navigate("/dashboard")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  }


  return (
    <div className='loginPage'>

        <div className='loginLeft'>

        </div>

        <div className='loginRight'>

            <div className='formCont'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={userEmail} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={userPassword} />
            </Form.Group>

            <br/>
            <Button variant="primary" type="submit" onClick={signInUser}>
                Sign In
            </Button>
            <br/> <br/>
            <p>Dont have an account? <Link to="/register">Sign Up</Link></p>
            </div>

        </div>


    </div>
  )
}

export default Login