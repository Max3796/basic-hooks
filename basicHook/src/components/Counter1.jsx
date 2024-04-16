import React, { useState } from 'react'

export default function Counter1() {
  const [currAge,setCurrAge] = useState(20)
  const increase =()=>{
    setCurrAge(currAge=> currAge+1)
  }
  const increaseTen =()=>{
    setCurrAge(currAge=> currAge+10)
  }
  const decrease =()=>{
    setCurrAge(currAge => currAge -1 )
  }
  return (
    <div style={{
      border: "1px Solid White",
      padding: "40px",
      marginTop: "100px",
    }}>
      <div className='counter1'>
        C O U N T E R 1
      </div>
      <h2>Age:- {currAge}</h2>
      <button onClick={increase}>Get Older</button>
      <button onClick={decrease}>Get Younger</button>
      <button onClick={increaseTen}>Get Older By Ten</button>
    </div>
  )
}