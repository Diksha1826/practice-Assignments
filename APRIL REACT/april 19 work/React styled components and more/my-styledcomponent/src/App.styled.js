import styled from 'styled-components' ;


 const AppStyled = styled.div`
text-align: center;
` ;

const BoldLabel = styled.label`
 font-weight: bold ;
`
const FormWrapper = styled.form`
 background-color: ${(props)=> (props.iscolourful ? "pink" : "blue")} ;
` ;

const Div = styled.div`
background-color: ${(props)=> props.colour } ;
`
export {AppStyled , BoldLabel , FormWrapper , Div}