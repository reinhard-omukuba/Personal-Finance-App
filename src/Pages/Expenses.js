import React, { useEffect, useState } from 'react'
import LeftNav from '../Components/LeftNav'
import NavBar from '../Components/NavBar'
import { Button } from 'react-bootstrap'
import {useNavigate} from "react-router-dom";

//firebase
import '../firebase';
import {db} from '../firebase'
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";

function Expenses() {

  //pull all expenses
  const [expenseList, setExpenseList] = useState([]);

  useEffect(()=>{
    const expenseData =  getDocs(collection(db, "expenses"));
    expenseData.then((QuerySnapshot)=>{
      let expenseItem = [];
      QuerySnapshot.forEach((doc)=>{

        expenseItem.push({id: doc.id, ...doc.data()});
        setExpenseList([...expenseItem]);

      })
    })

    
  })



  //navigate to add expense component
  const navigate = useNavigate();
  function goToAddExpense(){
    navigate("/addexpense")
  }

  return (
    <div className='dashboard'>
        <LeftNav/>

        <div className='workArea'>
            <NavBar/>

            <div className='mainContent'>
                
                <div className='headerTop'>
                  <h2>Expenses</h2>
                  <Button onClick={goToAddExpense}>Add Expenses</Button>
                </div>

                <div>


                  {expenseList.map((myExpense)=>(
                  <div  key={Math.random()}>
                    <p>Amount: {myExpense.amount}</p>
                    <p>Expense Date: {myExpense.expenseDate}</p>
                    <p>Paid through: {myExpense.paidThrough}</p>
                    <p>Authorised By: {myExpense.authorisedBy}</p>
                    <hr/>
                  </div>
                  ))}
                  




                </div>


            </div>

        </div>
    </div>
  )
}

export default Expenses