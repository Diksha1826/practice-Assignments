import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

export const Nav = styled.nav`
background-color: pink ;
height: 50px ;
display: flex ;
align-items: center ;
justify-content: center ;
text-decoration: none ;
font-weight: 600 ;
font-size: 17px ;
margin-bottom: 20px ;
`

export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <Nav>
        {/* keep all the NavLinks here */}
       <Link style={{textDecoration: "none" , marginLeft:"25px"}} to={'/'}>Home</Link>
       <Link style={{textDecoration: "none" , marginLeft:"25px"}} to={'/about'}>About</Link>
       <Link style={{textDecoration: "none" , marginLeft:"25px"}} to={'/books'}>Books</Link>
       {token?<Link style={{textDecoration: "none" , marginLeft:"25px"}} to={'/logout'}>Logout</Link>: <Link style={{textDecoration: "none" , marginLeft:"25px"}} to={'/login'}>Login</Link>}
        
       </Nav>
    </>
  );
};
