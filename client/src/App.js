import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import CreateGroup from './components/CreateGroup'
import AddExpense from './components/AddExpense'
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>  
      <Route path="/register" element={<Register />}/>
      <Route path ="/createGroup" element={<CreateGroup />}/>
      <Route path ="/addExpense" element={<AddExpense />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
