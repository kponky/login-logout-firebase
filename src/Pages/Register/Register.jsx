import React, { useState } from 'react'
import "./Register.scss"
import FormInputs from '../../components/FormInputs.jsx/FormInputs'
import { Link } from 'react-router-dom';
import { FacebookRounded } from '@mui/icons-material';

const Register = () => {

  const [inputValues, setInputValues]=useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email"
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password"
    },
    {
      id: 4,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password"
    },
 ] ;

 const handleChange = (e) =>{
  setInputValues({...inputValues, [e.target.name]: e.target.value});
}; 

 console.log(inputValues)
  return (
    <div className='register'>
    <form>

    <h2>Sign Up</h2>

    {inputs.map((input) =>(

      <FormInputs key={input.id}{...input} value={inputValues[input.name]}
      onChange= {handleChange} />


  ))}
 
    <button type='submit'>Signup</button>
    <div className='formLink'>
    <span>Already have an account? </span>
    <Link to ="/login" className='formSignup'>
    {" "} Sign In</Link>
    </div>
    
    <div className='line'></div>

    <div className='medOption'></div>
    <Link to="https://web.facebook.com/login/?_rdc=1&_rdr" className='facebook'>
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

export default Register
