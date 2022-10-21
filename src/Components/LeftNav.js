import React from 'react'
import {Link } from "react-router-dom";

function LeftNav() {
  return (
    <div className='leftNav'>

        <Link to="/dashboard">Dashboard</Link> <br />
        <hr />
        <Link to="/income">Income</Link> <br />
        <Link to="/expenses">Expenses</Link> <br />
        <Link to="/reports">Reports</Link> <br />
        <hr />
        <Link to="/profile">My Account</Link>

    </div>
  )
}

export default LeftNav