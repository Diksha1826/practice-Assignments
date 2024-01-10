import React from 'react'
import styles from './Form.module.css' ;



const Form = () => {

    const [data , setdata] = React.useState({});

   const onChange = (e)=>{
     let value = e.target.value ;
     let key = e.target.name ;
    //  console.log( key  , ":" , value)

     if(key === 'Marital_status'){
        setdata({
            ...data ,
            [key]: e.target.checked
        })
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
    // console.log(data)
    sendData(data);

}

const sendData = async(value)=>{
    
    let res = await fetch("http://localhost:3000/data" , {
        method: "POST" ,
        headers: {
            "Content-Type": "application/json" ,
        } ,
        body: JSON.stringify(value),
    });
    let data = await res.json();
    // onadd(data);
    console.log(data , value);

}







  return (
    <>
    <h1>Employee Form</h1>
    <form className= {styles.form} onSubmit={handleSubmit}>
        <div className= {styles.grid}>
            <label>Name: </label>
            <input type='text' name='Name' placeholder='Enter your name' onChange={onChange}  />
        </div>
        <div className= {styles.grid}>
            <label>Age: </label>
            <input type='number' name='Age' placeholder='Enter your age' onChange={onChange}  />
        </div>
        <div className= {styles.grid}>
            <label>Address: </label>
            <textarea name='Address' rows="7" cols="20" placeholder='Enter address here' onChange={onChange} />
        </div>
        <div className= {styles.grid}>
            <label>Department:</label>
            <select name='Department' onChange={onChange}>
                <option value="operation">Operation</option>
                <option value="IT">I.T.</option>
                <option value="sales">Sales</option>
                <option value="finance">Finance</option>
                <option value="administration">Administration</option>
            </select>
        </div>
         <div className= {styles.grid}>
            <label>Salary: </label>
            <input type='number' name='Salary' placeholder='Enter your salary' onChange={onChange}  />
        </div>
        <div className= {styles.grid}>
            <label>Marital status:</label>
            <input type='checkbox' name='Marital_status' onChange={onChange} />
        </div>
        <div>
            <input className={styles.submit} type='Submit' />
        </div>


    </form>

    </>
  )


}

export default Form