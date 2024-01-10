import styled from "styled-components"
 const ButtonWrapper = styled.div`

background-color: ${(props)=> (props.isButton ? "red" : "pink") } ;


`
 const Button = styled.button`
 ${(props) => props.isButton ? 
`font-size: 20px ; font-weight: bold  ; background-color: yellow ; color: black ; padding: 20px  ;`  : 
     "font-size: 10px   ; background-color: blue   ; color: white ;" }


`

export { ButtonWrapper , Button}
