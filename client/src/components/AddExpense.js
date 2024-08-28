import React, { useState } from 'react'
// import {Calendar} from 'react-calendar';

const AddExpense = () => {
    const [inputData,setInputData] = useState({
        'name':'','price':'','date':new Date()
    });
    const handleChange = (e) =>{
        setInputData({
            ...inputData, 
            [e.target.name]:e.target.value
        })
    }
  return (
    <div>
      Enter description
      <input type="text" name="name" value={inputData.name} onChange={handleChange} />
      Enter Price
      <input type="text" name="price" value={inputData.price}/>
      {/* <Calendar onChange={setInputData.date} value={inputData.date} /> */}
      <button>Done</button>
    </div>
  )
}

export default AddExpense
