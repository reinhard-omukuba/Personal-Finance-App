import React, { useRef } from 'react'
import LeftNav from '../Components/LeftNav'
import NavBar from '../Components/NavBar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate } from "react-router-dom";


//firebase
import '../firebase';
import {db} from '../firebase'
import { doc, setDoc } from "firebase/firestore"; 



function AddIncome() {

    //instantiating objects
    const amount = useRef();
    const incomeDate = useRef();
    const incomeAccount = useRef();
    const receivedBy = useRef();
    const navigate = useNavigate();

    //add account function
    function submitIncome(){
        //get data from inputs 
        const amountInput = amount.current.value;
        const incomeDateInput = incomeDate.current.value;
        const incomeAccountInput = incomeAccount.current.value;
        const receivedByInput = receivedBy.current.value;


        const myDocId = Math.random();
        const myDocId2 = myDocId * 169873556778;
        const myDocId3 =  Math.trunc(myDocId2);

        const finalDocId = myDocId3.toString();
        

        // Add a new document in collection "cities"
        setDoc(doc(db, "income", finalDocId), {
            docId:finalDocId,
            amount:amountInput,
            incomeDate: incomeDateInput,
            incomeAccount: incomeAccountInput,
            receivedBy: receivedByInput

        }).then(()=>{
            navigate("/income");
        })

    }



  return (
    <div className='dashboard'>

        <LeftNav/>

        <div className='workArea'>
            <NavBar/>

            <div className='mainContent'>
                <h2>Add Income</h2>
                
        

                <div>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" ref={amount}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Income Date</Form.Label>
                    <Form.Control type="datetime-local" ref={incomeDate} />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Income Account</Form.Label>
                    <Form.Select ref={incomeAccount}>
                    <option value="Cheque">Cheque</option>
                    <option value="Cash">Cash</option>
                    <option value="M-Pesa">M-Pesa</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Received By</Form.Label>
                    <Form.Control type="text" ref={receivedBy} />
                </Form.Group>

                
                <Button variant="primary" type="submit" onClick={submitIncome}>
                    Submit
                </Button>
                </div>


            </div>

        </div>
    </div>
  )
}

export default AddIncome