import React, { useContext } from 'react'
import { Footer, FormWrapper, NavbarWrapper } from './Page.styled'
import { ThemeContext } from '../Context/ThemeContext'

const Navbar = () => {
    const {theme ,toggleTheme} = useContext(ThemeContext)
  return (
    <div>
       <NavbarWrapper color={theme}>
        <h3> Navbar</h3>
        <button onClick={toggleTheme}>{theme === "dark" ? "LightMOde" : "DarkMode" }  </button>
        </NavbarWrapper> 
        <FormWrapper >
          <div>
            <label>Username :</label>
            <input type='text' placeholder='Enter name'/>
          </div>
          <div>
            <label>Password :</label>
            <input type='password' placeholder='Enter password'/>
          </div>
          <div>
            <label>Email:</label>
            <input type='email' placeholder='Enter email'/>
          </div>
          <input type='submit' />
        </FormWrapper>
        <Footer color={theme}>
          <p>Join us</p>
          <p>Contact us</p>
          <p>Investers</p>
          <p>Social media handles</p>
        </Footer>
    </div>
  )
}

export default Navbar