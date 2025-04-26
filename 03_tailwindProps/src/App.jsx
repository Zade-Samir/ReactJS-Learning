// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // const [count, setCount] = useState(0)
  // let myObj = {
  //   userName : "Samir",
  //   age : 22
  // }

  return (
    <>
      <h1 
      className='bg-green-400 text-black p-4 rounded-2xl mb-4'
      >Tailwind Test for me</h1>

      {/* it means that we can pass the values from one components to another */}
      <Card userName = "Samir" btnText = "Click me"/>
      <Card userName = "Earth Planet" />
    </>
  )
}

export default App
