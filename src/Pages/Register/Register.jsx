import React, { useState } from 'react'
import "./Register.scss"
import FormInputs from '../../components/FormInputs.jsx/FormInputs'
import { Link, useNavigate } from 'react-router-dom';
import { FacebookRounded } from '@mui/icons-material';
import { auth, provider } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { signInWithGoogle } from '../../firebase';

const Register = () => {

  const [inputValues, setInputValues]=useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate()

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username", 
      errorMessage:  "Username should be 3-16 character long",
      pattern: "^[A-Za-z0-9?=.*]{3, 16}$",
      required: true,

    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Input a valid email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:"Password should be atleast 8 characters", 
      patttern: `(?=.*[a-z])(?=.*[A-Z])(?=.[0-9])(?=.*[!@#$%*&*()_+])[A-Za-z0-9!@#$%^*()_+]{8,20}$`,      required: true,
    },
    {
      id: 4,
      name: "confirmpassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage:"Pasword don't match",
      pattern: inputValues.password, 
      required: true,
    },
 ] ;

 const handleChange = (e) =>{
  setInputValues({...inputValues, [e.target.name]: e.target.value});
}; 

const handleSignup = async (e) =>{
  e.preventDefault()

  try{
  await createUserWithEmailAndPassword(auth, inputValues.email, inputValues.password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;

    updateProfile(user, {
      displayName: inputValues.username
      // displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
    });

    //this is to take you to login age after signing
    navigate("/login")

  });
  
  }catch(error){}

};

const signInWithGoogle = ()=>{
  signInWithPopup(auth, provider).then((data) =>{
    setInputValues(data.user.email)
    localStorage.setItem("email", data.user.email)
  })
}



// console.log(inputValues)
  return (
    <div className='register'>
   
    <form>

    <h2>Sign Up</h2>

    {inputs.map((input) =>(

      <FormInputs key={input.id}{...input} value={inputValues[input.name]}
      onChange= {handleChange} />


  ))}
 
    <button type='submit' onClick={handleSignup}>Signup</button>
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
    <img src='/assests/google icon.png' alt='' className='googleImg' onClick={signInWithGoogle} />
   
    <span>Login with Google</span>

    </Link>
    </form>
      
    </div>
  )
}

export default Register
