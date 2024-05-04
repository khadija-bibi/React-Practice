import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)//State change//default value
  // let counter =15
  const addValue=()=>{  
    if(counter == 20){
      setCounter(counter)
    } 
    else{
      // counter=counter+1
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)

      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)


    } 
    console.log("counter: ",counter);
    
  }
  const removeValue=()=>{ 
    if(counter ==0){
      setCounter(counter)
    } 
    else{
      counter=counter-1
      setCounter(counter)
    }  
    console.log("removecounter: ",counter);
    
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button><br />
      <button
      onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
