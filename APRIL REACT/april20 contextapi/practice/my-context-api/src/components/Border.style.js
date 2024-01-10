import styled from "styled-components" ;

export const Border = styled.div`
margin: 10px ;
padding: 10px;
border: 1px solid black ;
background-color: ${(props)=> props.color} ;
color: ${(props) => props.color === "white" ? "black" : "white"} ;

` 
export const Flex = styled.div`
display: flex ;
align-items: center ;
justify-content: space-evenly ;
`