import React, { useContext, useEffect, useState } from 'react'
import './Pages.css' 
import { ProductContext } from '../Context/ProductContext';

const Products = () => {
    const {tosinglepage} = useContext(ProductContext);

    const [data , setData] = useState([]);

    const getData = async()=>{
        let r = await fetch('http://localhost:3001/data') ;
        let data = await r.json();
        setData(data);
    }

    // const [productdetail , setproductdetail] = useState([]);

    const handleproduct =(item)=>{
        localStorage.setItem("singleproduct" , JSON.stringify(item)) ;
        // setproductdetail(item);
        tosinglepage()
    }


    useEffect(()=>{
        getData();
    } , []);
    
    

  return (

    <div>

        <div className='Productswrapper'>

        {data.map((item)=> {
            return(
            <div onClick={()=>handleproduct(item)} className='singleproduct' key={item.id}> 
                <img src={item.image_url}  alt='product img'/>
                <p>{item.name}</p>
                <div className='price'>
                    <p>$ {item.price}</p>
                    <p><s>{item.strikedoffprice}</s></p>
                </div>
            </div>
       )
    })
}
        </div>       
    </div>
  )
} 

export default Products ;