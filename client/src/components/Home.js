import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div>
        Home
        Create Group
        Add Expense
        
        <button><Link to="/login">Login</Link></button>
        </div>
    </div>
  )
}

export default Home
