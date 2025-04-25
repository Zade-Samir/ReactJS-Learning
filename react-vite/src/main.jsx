import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp () {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

//it is not working like another functions because it doesn't have proper syntax
// const ReactElement = {
//   type : 'a',
//   props : {
//       href : "https://google.com",
//       target : "_blank"
//   },
//   children : "Click me for visit the google"
// }

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit the official google</a>
)

//this is our own react library like we used react's library in 'customReact.js' 
//createElements must have (tag, props, texts...)
const ReactElement = React.createElement(
  'a',
  {href : "https://google.com", target : "_blank"},
  "Click me to visit the official google site"
)

createRoot(document.getElementById('root')).render(

  <App/>
    
)
