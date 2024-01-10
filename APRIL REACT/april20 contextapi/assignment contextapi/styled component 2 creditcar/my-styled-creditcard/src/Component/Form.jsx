import React from 'react'
import { FormWrapper } from './page.styled'
import Creditcard from './Creditcard';

const Form = () => {
const [data , setdata]  = React.useState({});
const [datat , setdatat] = React.useState({});
  
const handlechange =(e)=>{
    setdata({
        ...data ,
        [e.target.name]: e.target.value 
    })
    setdatat({
        ...datat ,
        [e.target.name]: e.target.value 
    })
}

const handlesubmit = (e)=>{
    e.preventDefault();
    // console.log(data)
    setdatat(data) ;
    setdatat({
        "name": "",
        "cnumber": "",
        "expiry": "",
        "cvv": "",
    })
}

  return (
   <FormWrapper  >
    <form onSubmit={handlesubmit}>
    <div>
        <label>Username :</label>
        <input type='text' name='name' value={datat.name} onChange={handlechange} />
    </div>
    <div>
        <label>Card Number :</label>
        <input type='number' name='cnumber' value={datat.cnumber} onChange={handlechange} />
    </div>
    <div>
        <label>Expiry :</label>
        <input type='date' name='expiry' value={datat.expiry} onChange={handlechange} />
    </div>
    <div>
        <label>CVV :</label>
        <input type='number' name='cvv' value={datat.cvv} onChange={handlechange} />
    </div>
    <input type='submit' />
    </form>
    <Creditcard data={data} />
   </FormWrapper>
   
  )
}

export default Form