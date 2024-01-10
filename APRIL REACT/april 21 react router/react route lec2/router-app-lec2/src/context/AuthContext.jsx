import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const Authprovider = ({children}) => {

    // const [islogin , setLogin] = useState(false);
    const [token , settoken] = useState("");

    const login = async ()=>{
      let r = await fetch("https://reqres.in/api/login" , {
        method: "POST" ,
        headers: {
          "content-type": "application/json"  ,
        } ,
        body: JSON.stringify({
          email: "eve.holt@reqres.in" ,
          password: "cityslicka" ,
        }) ,
      });
      let data = await r.json();
      settoken(data.token)
    };

 const logout=()=>{
  settoken("")
 }
  return (
    <AuthContext.Provider value={{token , login , logout}}>
        {children}
    </AuthContext.Provider>
    
  )
}
