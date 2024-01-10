import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const SingleProduct = () => {
const navigate = useNavigate();
  const [data , setData] = useState({});

  

  useEffect(()=>{
    let localdata =  JSON.parse(localStorage.getItem('singleproduct'))
    setData(localdata);
  } , [])

  const {handlecart} = useContext(AuthContext);


  return (
    <div>SingleProduct
        <div>
           <h2>{data.name}</h2>
           <p>$ {data.price}</p>
           <button onClick={handlecart} >Add to cart</button>
           <button onClick={()=>navigate(-1)}>Go back to products</button>
        </div>
    </div>

  )
}

export default SingleProduct ;