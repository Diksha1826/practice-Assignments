import React, { useState } from 'react'
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

 export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [islogin , setislogin] = useState(false);
    const navigate = useNavigate()
    const handlecart = ()=>{
        console.log("hi m in")

        if(islogin === false){
        //    < Navigate to={'/login'} />
        navigate('login');
        }
        else{
        //    < Navigate to={'/shoppingcart'} />
        navigate('shoppingcart')
        }
    }
  return (
    <AuthContext.Provider value={{islogin , setislogin , handlecart}}>
        {children}
    </AuthContext.Provider>
  )
}
