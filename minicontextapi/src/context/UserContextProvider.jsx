import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    const [log, setLog] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser, log, setLog}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider