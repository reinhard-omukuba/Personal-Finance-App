import React from 'react'
import LeftNav from '../Components/LeftNav'
import NavBar from '../Components/NavBar'
import { Button } from 'react-bootstrap'
import {useNavigate} from "react-router-dom";

function Expenses() {

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


            </div>

        </div>
    </div>
  )
}

export default Expenses