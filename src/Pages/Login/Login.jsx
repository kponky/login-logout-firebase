 import React, { useState } from 'react'
 import './Login.scss'
import { Link } from 'react-router-dom'
import { FacebookRounded, Visibility, VisibilityOff } from '@mui/icons-material'
 
 const Login = () => {

const [inputs, setInputs] = useState ({
  email: "",
  password: "",
});

const [toggleEye, setToggleEye] = useState(false);

const[inputType, setInputType] = useState('password')

const handleToggle = (e) =>{
setToggleEye(!toggleEye);
setInputType(inputType === "password" ? "text" : "password" )
}

const handleChange = (e) =>{
  setInputs((prev) =>({...prev, [e.target.name]:e.target.value}))
};

console.log(inputs)



   return (
     <div className='login'>
     <form>

     <h2>Login</h2>

     <div className='formInputs'>
     <input type='email' name='email' id='email' placeholder='Email' required 
     onChange={handleChange}/>
     </div>


     <div className='formInputs'>
     <input type= {inputType} 
     name='password' 
     id='password'
      placeholder='Password' 
      required 
      onChange = {handleChange}/>

     <div className='eyeIcon' onClick={handleToggle}> {toggleEye ? <Visibility/> : <VisibilityOff/>}</div>
     </div>
 
    
     <button type='submit'>Login</button>
     <div className='formLink'>
     <span>Don't have an account? </span>
     <Link to ="/register" className='formSignup'>
     {" "} SignUp</Link>
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
 