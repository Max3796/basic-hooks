import React, { useEffect, useState } from 'react'

export default function Counter4() {

  const [curr,setCurr] = useState(0)
  const [currAge,setCurrAge] = useState(20)

  
  return (
    <div style={{
      border: "1px Solid White",
      padding: "40px",
      marginTop: "100px",
    }}>
      <div className='counter1'>
        C O U N T E R 4
      </div>
      <h2>Current Sibling :- {curr}</h2>
      <h2>Age:- {currAge}</h2>
      <button onClick={()=>{
        setCurrAge((age)=>{return age+1})
      }}>Get Older</button>
      <button onClick={()=>{
        setCurr((prev)=>{return prev+1})
      }}>Get More Sibling</button>
      <button onClick={()=>{
        setCurr(0)
        setCurrAge(0)
      }}>Reset</button>
    </div>
  )
}