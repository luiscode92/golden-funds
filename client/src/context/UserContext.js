import React, {useState, useEffect, Children} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../service/firebase";




export const UserContext = React.createContext()


export const UserProvider = ({children}) => {
    const [user, loading, error] = useAuthState(auth);



    return (
      <UserContext.Provider
        value={{
            user,
            loading,
        }}
      >
          {children}
      </UserContext.Provider>
    )
}