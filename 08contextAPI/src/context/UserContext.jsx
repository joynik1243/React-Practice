import React,{useState} from "react";
import { createContext } from "react";

export const UserContext = React.createContext(null);

export const UserContextProvider = ({children})=>{
    const [user, setUser] = useState({username: "", password: ""});
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
 }