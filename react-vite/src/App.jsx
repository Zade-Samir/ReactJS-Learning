

import Chai from "./Chai"

function App() {
    const userName = "India"
    
    return (
        //we can only return only one element
        <div>
            <Chai /> 
            <h1>This is hightlight of {userName}</h1>
            <p>This is paragraph for checking the div into App</p>
        </div>
        
    )
}

export default App