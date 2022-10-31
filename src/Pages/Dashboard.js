import React, { useState } from 'react'
import LeftNav from '../Components/LeftNav'
import NavBar from '../Components/NavBar'

//firebase
import '../firebase';
import {db} from '../firebase'
import { collection, getDocs } from "firebase/firestore";

function Dashboard() {

  const [incomeStat, setincomeStat] = useState();
  const [expenseStat] = useState();
  const [savingsStat] = useState();

  const incomeData =  getDocs(collection(db, "income"));
  incomeData.then((querySnapshot) => {

    let totalIncome = 0;
    querySnapshot.forEach((doc) =>{
      const theIncome = doc.data().amount;
      const convIncome = parseInt(theIncome);
      //console.log(convIncome);
      totalIncome = convIncome + totalIncome;

    })

    console.log(totalIncome)
    setincomeStat(totalIncome)
  })



  return (
    <div className='dashboard'>
        <LeftNav/>

        <div className='workArea'>
            <NavBar/>

            <div className='mainContent'>
                <h2>Dashboard</h2>

                <div className='tabCont'>

                  <div className="tabIncome">
                    <h5>Income</h5>
                    <h3>KES. {incomeStat} </h3>
                  </div>

                  <div className="tabIncome2">
                    <h5>Expenses</h5>
                    <h3>KES. {expenseStat}</h3>
                  </div>

                  <div className="tabIncome3">
                    <h5>Savings</h5>
                    <h3>KES. {savingsStat}</h3>
                  </div>


                </div>


            </div>
        
        </div>
    </div>
  )
}

export default Dashboard