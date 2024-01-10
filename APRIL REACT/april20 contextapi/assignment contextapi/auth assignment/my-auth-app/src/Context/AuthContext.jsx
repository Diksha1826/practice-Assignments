import React, { createContext } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

   

    const [isAuth , setisAuth] = React.useState(false);

    const ToggleAuth = ()=>{
        setisAuth(!isAuth)
    }

  return (
    <AuthContext.Provider value={{isAuth , ToggleAuth , setisAuth }}>
        {children}
    </AuthContext.Provider>
  )
}
