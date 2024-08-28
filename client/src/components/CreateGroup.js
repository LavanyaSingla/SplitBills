import React, { useState } from 'react'

const CreateGroup = () => {
    const [groupName,setGroupName] = useState('');
    const handleClick =(e)=>{
        e.preventDefault();
    }
  return (
    <div>
      <label> group name</label>
      <input type="text" name="groupName" value={groupName} onChange={(e)=>setGroupName(e.target.value)}></input>
      <button onClick={handleClick}>Done</button>
    </div>
  )
}

export default CreateGroup
