 import React from 'react'
 import './Login.scss'
import { Link } from 'react-router-dom'
import { FacebookRounded } from '@mui/icons-material'
 
 const Login = () => {
   return (
     <div className='login'>
     <form>

     <h2>Login</h2>

     <div className='formInputs'>
     <input type='email' name='email' id='email' placeholder='Email' required/>
     </div>
 
    
     <button type='submit'>Signup</button>
     <div className='formLink'>
     <span>Already have an account? </span>
     <Link to ="/login" className='formSignup'>
     {" "} Sign In</Link>
     </div>
     
     <div className='line'></div>
 
     <div className='medOption'></div>
     <Link to="https://web.facebook.com/login/?_rdc=1&_rdr" target='_blank' className='facebook'>
     <FacebookRounded className='facebookIcon'/>
     <span>Login with Facebook</span>
     </Link>
  
     <div className='medOption'></div>
     <Link to="#" className='facebook google'>
     <img src='/assests/google icon.png' alt='' className='googleImg' />
    
     <span>Login with Google</span>
 
     </Link>
     </form>
     

     </div>
   )
 }
 
 export default Login
 