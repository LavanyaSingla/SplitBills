import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div>
        Home
        <br />
        <Link to="/createGroup">Create Group</Link>
        <br />
        <Link to="/addExpense">Add Expense</Link>
        <br />
        <button><Link to="/login">Login</Link></button>
        </div>
    </div>
  )
}

export default Home
