import React from 'react'
import LeftNav from '../Components/LeftNav'
import NavBar from '../Components/NavBar'
import { Button } from 'react-bootstrap'
import {useNavigate} from "react-router-dom";

//firebase
import '../firebase';
import {db} from '../firebase'

function Income() {

  //pull income data


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
                


            </div>

        </div>
    </div>
  )
}

export default Income