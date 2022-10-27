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


function AddExpense() {

    const amount = useRef();
    const expenseDate = useRef();
    const paidThrough = useRef();
    const authorisedBy = useRef();
    const navigate = useNavigate();

    function submitExpense(){

        const amountInput = amount.current.value;
        const expenseDateInput = expenseDate.current.value;
        const paidThroughInput = paidThrough.current.value;
        const authorisedByInput = authorisedBy.current.value;

        const myDocId = Math.random();
        const myDocId2 = myDocId * 9863873556778;
        const myDocId3 =  Math.trunc(myDocId2);

        const finalDocId = myDocId3.toString();

        // Add a new document in collection "cities"
        setDoc(doc(db, "expenses", finalDocId), {
            docId:finalDocId,
            amount:amountInput,
            expenseDate: expenseDateInput,
            paidThrough: paidThroughInput,
            authorisedBy: authorisedByInput

        }).then(()=>{
            navigate("/expenses");
        })

    }

  return (
    <div className='dashboard'>

    <LeftNav/>

    <div className='workArea'>
        <NavBar/>

        <div className='mainContent'>
            <h2>Add Expense</h2>

            <div>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" ref={amount}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Expense Date</Form.Label>
                    <Form.Control type="datetime-local" ref={expenseDate} />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Paid through</Form.Label>
                    <Form.Select ref={paidThrough}>
                    <option value="Cheque">Cheque</option>
                    <option value="Cash">Cash</option>
                    <option value="M-Pesa">M-Pesa</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Authorised By</Form.Label>
                    <Form.Control type="text" ref={authorisedBy} />
                </Form.Group>

                
                <Button variant="primary" type="submit" onClick={submitExpense}>
                    Submit
                </Button>
            </div>

        </div>

    </div>


    </div>
  )
}

export default AddExpense