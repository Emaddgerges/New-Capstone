import React, { useState, useEffect } from "react";

export const Authcontext = React.createContext();

const  AuthProvider = (props) =>{
  const [auth, setAuth] = useState({
    email:'a'
  })

    useEffect(() => {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
     
        if(email){
            setAuth({
               token, email 
            });
        }

    },[]);


    return(
        <Authcontext.Provider value={{auth, setAuth}}>
          {props.children}
        </Authcontext.Provider>
    )
}
export default AuthProvider;