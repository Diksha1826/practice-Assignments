import styled from 'styled-components'


export const NavbarWrapper =  styled.div`
   display: flex;
   justify-content: space-evenly;
   height: 50px ;
   align-items: center;
   margin-bottom: 100px ;
   border-bottom: ${(props)=>props.color ==='dark' ? '2px solid white' : '2px solid black'}  ;
   

`
export const Bodywrapper = styled.div`
${(props) => props.color === 'dark'? `background-color:black ; color:white`: 
` background-color:white  ; color: black  `} ;
`

export const FormWrapper = styled.div`
width: 500px;
margin: auto ;
height: 500px ;


`
export const Footer = styled.div`
 border-top: ${(props)=>props.color ==='dark' ? '2px solid white' : '2px solid black'}  ;
 display: flex ;
 justify-content: space-evenly ;
 align-items: center ;
 height: 80px;
`