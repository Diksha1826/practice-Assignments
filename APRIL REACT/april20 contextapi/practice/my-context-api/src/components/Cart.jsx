import React, { useContext } from 'react'
import { CartContext } from '../Context/ContextCartchanger'


export const Cart = () => {
  const {value} = useContext(CartContext) ; 
  return (
   <div>Cart : {value} </div> 
  )
}
