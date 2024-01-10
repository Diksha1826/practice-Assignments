import React from 'react'
import { NavbarWrapper } from './mystyle.styled'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();

  return (
    <>
    <NavbarWrapper>
    <h3 onClick={()=>navigate('aboutus')}>  About us  </h3>
    <h3 onClick={()=>navigate('contactus')}>Contact us </h3>
    <h3> <Link to={'/faq'}>FAQ </Link> </h3>
    <h3 onClick={()=>navigate('products')}>Products</h3>
    <h3 onClick={()=>navigate('shoppingcart')}>Shopping Cart </h3>
    </NavbarWrapper>
    </>
  )
}

export default Navbar