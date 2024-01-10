import React from 'react'
import { ButtonWrapper , Button } from './Button.styled.js'

const Buttond = () => {
    const [isButton , setisbutton] = React.useState(true)
  return (
    <ButtonWrapper isButton={isButton}  >
        <Button isButton={isButton} onClick={()=>setisbutton(!isButton)} >i m styled component</Button>
    </ButtonWrapper>
  )
}

export default Buttond