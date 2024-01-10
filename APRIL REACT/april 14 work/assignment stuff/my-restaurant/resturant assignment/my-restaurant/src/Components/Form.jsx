import React from 'react'
import styles from './Form.module.css'

const Form = ({onUpdateData}) => {

    const initialFormData = {
        restaurant_name: "" ,
        categories: "" ,
        cost_for_one: 0 ,
        rating: 0 ,
        payment_method: "",
        reviews: "" 
        
    }
    const [data , setdata] = React.useState(initialFormData);

    const handleChange = (e)=>{
        var key = e.target.name ;
        var value = e.target.value ;
        // console.log(key , value)
        if(key === "cost_for_one"){
            setdata({
                ...data ,
                [key]:  `${value}` ,
            })
        }
        else if(key === "rating"){
            if(parseInt(value)> 5){
                alert("Type rating between 1-5");
            }
            else{
                setdata({
                    ...data ,
                    [key]:  value ,
                })
            }  
        }
        else{
        setdata({
            ...data ,
            [key]: value ,
        })
    }
}


    const handleSubmit = (e)=>{
        e.preventDefault();
        senddata(data) ;
        onUpdateData(data);
        setdata(initialFormData);
    }


    const senddata = async(data)=>{
        let res = await fetch("http://localhost:9999/restaurant_data" , {
        method: "POST" ,
        headers: {"Content-Type": "application/json" , } ,
        body: JSON.stringify(data) ,  
    });
    let resdata = await res.json();
}


  return (
    <>
     <div className={styles.mainform}>
    <h1>Enter your restaurants detail</h1>
    <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.grid}>
            <label>Restaurant_name :</label>
            <input name='restaurant_name' value={data.restaurant_name} type='text' placeholder='restaurant_name' onChange={handleChange} />
        </div>
        <div className={styles.grid}>
            <label>Cuisine_name :</label>
            <input name='categories' type='text' value={data.categories} placeholder='cuisine' onChange={handleChange} />
        </div>
        <div className={styles.grid}>
            <label>Cost_for_one :</label>
            <input name='cost_for_one' type='number' value={data.cost_for_one} placeholder='cost_for_one' onChange={handleChange} />
        </div>
        <div className={styles.grid}>
            <label>Payment_method :</label>
            <select name='payment_method' value={data.payment_method} onChange={handleChange}>
                <option>---</option>
                <option>COD</option>
                <option>Online</option>
            </select>
        </div>
        <div className={styles.grid}>
            <label>Rating :</label>
            <input name='rating'  type='number' value={data.rating} placeholder='rating' onChange={handleChange} />
        </div>
        <div className={styles.grid}> 
            <label>Reviews :</label>
            <input name='reviews' type='number' value={data.reviews} placeholder='reviews' onChange={handleChange} />
        </div>
        <div>
            <input name='submit' type='submit' />
        </div>
    </form>
   </div>
    </>
  )
}

export default Form