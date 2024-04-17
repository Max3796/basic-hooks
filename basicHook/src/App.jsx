import './App.css'
import React, { useState } from 'react'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'
import Counter3 from './components/Counter3'
import Counter4 from './components/Counter4'
import Effect from './components/Effects/Effect'
import UseContext from './components/UseContext'

export const ToggleTheme = React.createContext()

function App() {
  const [show,setShow]=useState(true)
  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }
  return (
    <ToggleTheme.Provider value={state}>
       <button onClick={()=>{
      setShow(!show)
    }}>
      C H A N G E
    </button>
    <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
    {!show ? (
      <>
    <Counter4/>
    <Counter3/>
    <Counter2/>
    <Counter1/>
      </>
    ):( <Effect/>)
   
    }
    </ToggleTheme.Provider>
  )
}

export default App
