
import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser:{},
    userToken:{},
    setCurrentUser:()=>{},
    setUserToken:()=>{}

})


export const ContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState({

        name:"tom"

    });

    const [userToken, setUserToken] = useState('');

    return(

        <StateContext.Provider value = {{

            currentUser,
            setCurrentUser,
            userToken,
            setUserToken

        }}>

            {children}

        </StateContext.Provider>
    )
}

export const userStateContext = () => useContext (StateContext)