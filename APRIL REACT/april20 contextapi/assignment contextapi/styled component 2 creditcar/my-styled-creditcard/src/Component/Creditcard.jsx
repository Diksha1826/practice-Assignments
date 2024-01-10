import React from 'react'
import { CreditCard, Flex } from './page.styled'

const Creditcard = (props) => {
  return (
    <>
        <CreditCard>
        <h3>VISA</h3>
        <p>{props.data.cnumber}</p>
        <Flex>
            <div>
            <p>CARD HOLDER</p>
            <h4>{props.data.name}</h4>
            </div>
            <div>
            <p>EXPIRES</p>
            <h4>{props.data.expiry}</h4>
            </div>
            <div>
            <p>CVV</p>
            <h4>{props.data.cvv}</h4>
            </div>
        </Flex>
        </CreditCard>

    
    </>
  )
}

export default Creditcard