import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //setting the [counter, function] = useState()
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    // console.log("Value Added", Math.random());
    // console.log("Value Added", counter);

    if (counter > 0 && counter < 20) {
      setCounter(counter += 1)
    }
    else if (counter == 0) {
      setCounter(counter = 1)
    }
  }

  const removeValue = () => {
    if (counter > 0 && counter < 20) {
      setCounter(counter - 1)
    }
    else if (counter == 20) {
      setCounter(counter = 19)
    }
  }

  return (
    <>
      <h1>India</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
