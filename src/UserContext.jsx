// import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const UserContext= createContext({})

// eslint-disable-next-line react/prop-types
export function UserContextProvider({children}){
    const [user,setUser] =useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)

    


    useEffect(()=>{
        if(user){
         console.log(user)
        }
    },[user])
    return(
        <UserContext.Provider  value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )

}