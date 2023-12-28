import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(11)
  //let counter = 11

  const addValue = () => {
    //counter = counter + 1
    // setCounter(counter + 1)
    if(counter < 20){
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    //counter = counter - 1
    // setCounter(counter - 1)
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value : {counter}</button> 
      <br/><br/>
      <button onClick={removeValue}>remove value : {counter}</button>
      
      <p>footer : {counter}</p>
    </>
  )
}

export default App