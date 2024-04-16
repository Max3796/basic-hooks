import React, { useState } from 'react'

export default function Counter2() {

  const [curr,setCurr] = useState(0)
  const [currAge,setCurrAge] = useState(20)

  
  
  const increase =()=>{
    setCurrAge(currAge=> currAge+1)
  }
  const decrease =()=>{
    setCurrAge(currAge => currAge -1 )
  }
  const getmore =()=>{
    setCurr(curr=> curr+1)
  }
  const getless =()=>{
    setCurr(curr=> curr-1)
  }
  return (
    <div style={{
      border: "1px Solid White",
      padding: "40px",
      marginTop: "100px",
    }}>
      <div className='counter1'>
        C O U N T E R 2
      </div>
      <h2>Current Sibling :- {curr}</h2>
      <h2>Age:- {currAge}</h2>
      <button onClick={getmore}>Get More Sib</button>
      <button onClick={getless}>Get Less Sib</button>
      <button onClick={increase}>Get Older</button>
      <button onClick={decrease}>Get Younger</button>
    </div>
  )
}