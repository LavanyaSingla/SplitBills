import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    const [inputData,setInputData] = useState({
        'username':'','email':'','password':''
    });
    const handleChange =(e)=>{
        setInputData({
            ...inputData,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(inputData)
       
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Username
            <input type="text" name="username" value={inputData.username} onChange={handleChange}></input>
        </label>
        <br />
        <label> Email
            <input type="email" name="email" value={inputData.email} onChange={handleChange}></input>
        </label>
        <br />
        <label>Password
            <input type="password" name="password" value={inputData.password} onChange={handleChange}></input>
        </label>
        <br />
        <button type='Submit'>SignIn</button>
        <div>
            <p>Already have an account</p>
            <button><Link to="/login">Login</Link></button>
        </div>
      </form>
    </div>
  )
}

export default Register
