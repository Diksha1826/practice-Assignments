import React, { useContext } from 'react'
import { Cart } from './Cart'
import { ThemeContext } from '../Context/ThemeProvider'
import { Border } from './Border.style';
import { Flex } from './Border.style';

const Navbar = () => {
    const {theme , toggleTheme} = useContext(ThemeContext);
  return (
    <Border color={theme}>
    <Flex>
        <h3>Navbar</h3>
        <div>Toggle theme : to {theme === "white" ? "black" : "white"}</div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Cart />
     </Flex> 
    </Border>
  )
}

export default Navbar