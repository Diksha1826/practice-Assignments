import React, { Children, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
export const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {
    const navigate = useNavigate();

    const tosinglepage =()=>{
        navigate("singleproduct");
    }

  return (
    <ProductContext.Provider value={{tosinglepage}}>
        {children}
    </ProductContext.Provider>
  )
}
