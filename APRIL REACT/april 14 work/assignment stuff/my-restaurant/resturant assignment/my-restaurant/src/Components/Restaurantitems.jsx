import React from 'react'
import styles from './Form.module.css'
import Form from './Form';

const Restaurantitems = () => {

    const [data , setdata] = React.useState([]) ;

    const getData = async()=>{
        let res = await fetch("http://localhost:9999/restaurant_data") ;
        let rdata = await res.json();
        setdata(rdata)
        
    }

    const updateData = (newData)=>{
      setdata((previ)=>
         [...previ , newData] 
      )
    }



React.useEffect(()=>{
    getData();
} , [])





const filterfive =(val)=>{
 let newdata = data.filter(elem=>
    elem.rating >= val  
)
// console.log(newdata)
setdata(newdata)
}



  return (
    <>
    <Form onUpdateData={updateData} />
    <div className={styles.restaurantnav}>Restaurants</div>
    <div>
      <button onClick={()=>{filterfive(1)}}>Filter 1*</button>
      <button onClick={()=>{filterfive(2)}}>Filter 2*</button>
      <button onClick={()=>{filterfive(3)}}>Filter 3*</button>
      <button onClick={()=>{filterfive(4)}}>Filter 4*</button>
      <button onClick={()=>{filterfive(5)}}>Filter 5*</button>
    
    </div>
    <div className={styles.restaurantgrid}>
    { data.map((elem)=>{
      return(
      <div className={styles.gridinnerdiv}  key={elem.id}>
      <div className={styles.innerflex} >
      <p> <b> {elem.restaurant_name}</b></p> 
      <p> rating : {elem.rating}*</p>
      </div>
      <p>speciality : {elem.categories}</p>
      <p> cost_for_one : {elem.cost_for_one}</p>
      <div className={styles.innerflex}>
        <p>payment_method : {elem.payment_method}</p>
        <p>reviews : {elem.reviews}</p>
      </div>
      </div>
      )
    })
  }
  </div>
</>
  )
}

export default Restaurantitems

// "restaurant_name": "Macaca mulatta",
// "categories": "LuctusNecMolestie cuisine",
// "cost_for_one": "$2.08",
// "payment_method": "Online",
// "rating": 43,
// "reviews": 88