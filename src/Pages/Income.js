import React, { useEffect, useState } from 'react'
import LeftNav from '../Components/LeftNav'
import NavBar from '../Components/NavBar'
import { Button } from 'react-bootstrap'
import {useNavigate} from "react-router-dom";

//firebase
import '../firebase';
import {db} from '../firebase'
import { collection, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';


function Income() {

  const [incomeList, setIncomeList] = useState([]);

  //pull income data
  useEffect(()=>{

    const incomeData =  getDocs(collection(db, "income"));
    incomeData.then((querySnapshot) => {
      let incomeItem = [];
      querySnapshot.forEach((doc) =>{
        //console.log(doc.id, " => ", doc.data());
        incomeItem.push({id: doc.id, ...doc.data()});
        setIncomeList([...incomeItem]);
      })
  
    })
    
  })



  //navigate to add income component
  const navigate = useNavigate();
  function goToAddIncome(){
    navigate("/addincome")
  }

  return (
    <div className='dashboard'>

        <LeftNav/>

        <div className='workArea'>
            <NavBar/>

            <div className='mainContent'>
              <div className='headerTop'>
                <h2>Income</h2>
                <Button onClick={goToAddIncome}>Add Income</Button>
              </div>
              <br/>

              <div>

                {incomeList.map((myincome) => (
                  <div key={Math.random()}>
                    <p>Amount: {myincome.amount}</p>
                    <p>Income Account: {myincome.incomeAccount}</p>
                    <p>Date: {myincome.incomeDate}</p>
                    <p>Received By: {myincome.receivedBy}</p>
                    <hr/>
                  </div>
                ))}
                


              </div>
                
            </div>

        </div>
    </div>
  )
}

export default Income