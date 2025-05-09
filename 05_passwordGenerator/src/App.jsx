import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef -> 
  const passwordRef = useRef(null)

  //callback contains (function, dependecies)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*"

    for (let index = 1; index < length; index++) {

      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },
  [length, numberAllowed, charAllowed, setPassword]) //setPassword for optimization


  //function for copy the password to the clipBoard
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 4) //for select custom text
    window.navigator.clipboard.writeText(password)
  }, [password])



  //it requires (callback, dependencies array)
  // useEffect(() => {}, [])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-600'>

        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='bg-white outline-none w-full py-1 px-3 '
          placeholder = "password"
          read-only
          ref={passwordRef}
          />

          <button
          onClick={copyPasswordToClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6} max={50} 
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked = {numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
            }}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked = {charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
            }}/>
            <label htmlFor="characterInput">Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
