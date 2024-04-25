import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 0;
  let addValue = () =>{
    if(counter<20){
      // setCounter(counter+1);
      setCounter(counter+2);
      setCounter(counter+1);
      console.log("Counter is: ", counter);
    }
  }
  
  let removeValue = () =>{
    if(counter>0){
      counter = counter-1;
      console.log("Counter is now ", counter);
      setCounter(counter);
    }
  }

  return (
    <>
    <h1>Hello React</h1>
    <h2>Counter {counter}</h2>
    <br />
    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>

    <h2>Counter is {counter}</h2>
    </>
  )
}

export default App
