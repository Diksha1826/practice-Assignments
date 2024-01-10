import React, { createContext } from 'react'

export const CartContext = createContext();

const ContextCartchanger = ({children}) => {
    const[value , setValue] = React.useState(0);

   const addItem = ()=>{
    setValue(value + 1);
    }

  return (
    <CartContext.Provider value={{value , setValue , addItem}}>
        {children}
    </CartContext.Provider>
  )
}

export default ContextCartchanger