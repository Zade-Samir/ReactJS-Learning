import React, { useState } from "react";
import UserContext from "./UserContext";

//children is generic name for 'div' or which pass the things as it is
const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {/* write as it is, whatever the things it came */}
            {children} 
        </UserContext.Provider>
    )
}

export default UserContextProvider