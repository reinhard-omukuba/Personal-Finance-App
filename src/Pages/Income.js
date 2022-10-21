import React from 'react'
import LeftNav from '../Components/LeftNav'
import NavBar from '../Components/NavBar'

function Income() {
  return (
    <div className='dashboard'>

        <LeftNav/>

        <div className='workArea'>
            <NavBar/>

            <div className='mainContent'>
                <h2>Income</h2>


            </div>

        </div>
    </div>
  )
}

export default Income