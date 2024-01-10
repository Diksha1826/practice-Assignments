import React from 'react'
import styles from "./Form.module.css"
 
 const Form = () => {

    const [formData , setFormData] = React.useState({});

    const handleChange = (e)=>{
        // console.log(e.target.name)
         let inpname = e.target.name ;
         //if input type is checkbox there is different way of handeling it
         if(e.target.type === 'checkbox'){
            setFormData({
                ...formData ,
                [inpname]: e.target.checked ,
            }); 
         }
         //if input type is file there is different way
        else if(e.target.type === 'file'){
            setFormData({
                ...formData ,
                [inpname]: e.target.files ,
            });
        }
        else{ 
            setFormData({
                ...formData ,
                [inpname]: e.target.value ,
            });
    }
}



    const handlesubmit = (event)=>{
        // console.log(event.target[0].value)
        event.preventDefault() ;
        // fetch(url , {method: post , body: JSon.stringify(formData)}) ;
    };

   return (
    <>
    <div className={styles.form}>
     <h1>FORM</h1>
     <form onSubmit={handlesubmit}>
        <div className={styles.grid}>
            <label>User name :</label>
            <input name='name' type='text' placeholder='Enter Name' onChange={handleChange} />
        </div>
        <div  className={styles.grid}>
            <label>Password : </label>
            <input name='password' type={ formData.showpassword ? "text" : "password"} placeholder='Enter Password' onChange={handleChange} />
            <div/>
            <div >
            <input type='checkbox' name='showpassword' onChange={handleChange}/>
            <label>Show password</label>
            </div>
        </div>
        <div className={styles.grid}>
            <label>Age :</label>
            <input name='age' type='number' placeholder='Enter age' onChange={handleChange}/>
        </div>
        <div className={styles.grid}>
            <label>gender :</label>
            <select name='gender' onChange={handleChange}>
                <option>...</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Others</option>

            </select>
        </div>

        <div className={styles.grid}>
            <label> Graduated :</label>
            <div>
            <input  name='genderRadio' type='radio' value="yes" onChange={handleChange} /> Yes <br/>
            <input name='genderRadio' type='radio' value="no" onChange={handleChange} /> No
            </div>
        </div>


        <div className={styles.grid}>
            <label>Date of birth :</label>
            <input name='Dob' type='date' placeholder='Enter DOB' onChange={handleChange}/>
        </div>
        <div className={styles.grid}>
            <label>resume :</label>
            <input name='resume' type='file' onChange={handleChange}/>
        </div>
        <input  type='submit'  />

     </form>
     </div>
    </>
   )
 }
 
 export default Form