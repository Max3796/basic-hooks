import React, { useState } from 'react'

export default function Counter3() {
const[data,setData]=useState({age:20,sibling:3})
  const handleSibling =()=>{
    setData({
      ...data,
      sibling:data.sibling+1,
    })
  }
  const handleAge =()=>{
    setData({
      ...data,
      age:data.age+1,
    })
  }
  return (
    <div style={{
      border: "1px Solid White",
      padding: "40px",
      marginTop: "100px",
    }}>
      <div className='counter1'>
        C O U N T E R 3
      </div>
      <h2>My Age:- {data.age}</h2>
      <h2>Sibling:- {data.sibling}</h2>
      <button onClick={handleAge}>get older</button>
      <button onClick={handleSibling}>get more sib</button>
    </div>
  )
}