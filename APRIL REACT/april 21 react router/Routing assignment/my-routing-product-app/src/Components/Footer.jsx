import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerinn'>
            <h4>Help</h4>
            <h4>Investers</h4>
        </div>
        <div>
            <p> @copyright claim powered by radheproduction*</p>  
        </div>
        <div  className='footerinn'>
            <div>
             <img src='https://cdn-icons-png.flaticon.com/128/6422/6422200.png' alt='socialmediaimg'/>
            </div>
            <div>
               <img src='https://cdn-icons-png.flaticon.com/128/6422/6422199.png' alt='socialmediaimg'/>
            </div>
            <div>
               <img src='https://cdn-icons-png.flaticon.com/128/6422/6422213.png' alt='socialmediaimg'/>
            </div>
            <div>
               <img src='https://cdn-icons-png.flaticon.com/128/6422/6422202.png' alt='socialmediaimg'/>
            </div>
        </div>
    </div>
  )
}

export default Footer