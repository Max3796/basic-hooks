import './App.css'
import { useState } from 'react'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'
import Counter3 from './components/Counter3'
import Counter4 from './components/Counter4'
import Effect from './components/Effects/Effect'

function App() {
  const [show,setShow]=useState(true)
  return (
    <>
       <button onClick={()=>{
      setShow(!show)
    }}>
      C H A N G E
    </button>

    {!show ? (
      <>
    <Counter4/>
    <Counter3/>
    <Counter2/>
    <Counter1/>
      </>
    ):( <Effect/>)
   
    }
    </>
  )
}

export default App
