import React, { useContext } from 'react'
import { CartContext } from '../Context/ContextCartchanger'
import { Border } from './Border.style'
import { ThemeContext } from '../Context/ThemeProvider'

const Body = () => {
    const {addItem } = useContext(CartContext)
    const {theme} = useContext(ThemeContext)
  return (
    <Border color={theme} >
    <h3>Body</h3>
    <button onClick={addItem}>Add to cart</button>
    </Border>
  )
}

export default Body