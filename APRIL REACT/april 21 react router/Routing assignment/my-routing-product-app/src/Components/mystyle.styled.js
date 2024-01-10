import styled from 'styled-components';

const NavbarWrapper = styled.div`
   height: 50px ;
   padding: 10px ;
   display: flex ;
   justify-content: space-evenly ;
   align-items: center ;
   background: linear-gradient(to bottom right , black , rgb(19, 47, 64) , black) ;
   color: white ;
   &:hover {
      background: black ;
   }
   
`

export {NavbarWrapper}