import React from 'react'; //core foundational library for all references
import ReactDOM from 'react-dom/client'; //implentation of react library on the web
import App from './App';

//ReactDom => means create the self DOM
//creating the DOM whose id is 'root' 
const root = ReactDOM.createRoot(document.getElementById('root'));

//render the 'App' tag on the broswer using created DOM above
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
