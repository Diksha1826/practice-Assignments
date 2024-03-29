// import axios from "axios";
import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = async(email, password) => {
    //  api request to reqres.in for the token

    let obj = {
      "email": email ,
      "password": password 
    }

    let res = await fetch("https://reqres.in/api/login" , {
      method: "POST" ,
      headers: {
        "Content-Type": "application/json" ,
      } ,
      body: JSON.stringify(obj) ,
    }) ;
      let data = await res.json();
      if(data.token){
        // console.log(data) 
        setToken(data)
      } 
      else{
        alert("Invalid User")
      }    
  };
  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken("")
  };

  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
