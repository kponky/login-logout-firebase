 import React, { useState } from 'react'
 import './Login.scss'
import { Link,  } from 'react-router-dom'
// import { Link, //useNavigate } from 'react-router-dom'
import { FacebookRounded, Visibility, VisibilityOff } from '@mui/icons-material'
import {  signInWithEmailAndPassword, } from 'firebase/auth'
import { auth,  } from '../../firebase'
import { signInWithGoogle} from '../../firebase'
 
 const Login = () => {

const [inputs, setInputs] = useState ({
  email: "",
  password: "",
});

const [toggleEye, setToggleEye] = useState(false);

const[inputType, setInputType] = useState('password');

//const  navigate = useNavigate()


const handleToggle = (e) =>{
setToggleEye(!toggleEye);
setInputType(inputType === "password" ? "text" : "password" )
}

const handleChange = (e) =>{
  setInputs((prev) =>({...prev, [e.target.name]:e.target.value}))
};
const handleLogin = (e)=>{
  //e.preventDefault();


  try{

    signInWithEmailAndPassword(auth, inputs.email, inputs.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...

    //navigate to home page 
   // navigate("/home")
  })
  }catch(error){}

};

// const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//   console.log(error);
  
// })
// };



// const signInWithGoogle = () => {
//   signInWithPopup(auth,provider).then((inputs)=>{
//       inputType(inputs.user.email)
//       localStorage.GoogleAuthProvider("email", inputs.user.email)
//   })
// }


// const signInWithGoogle = (e) => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log(result);
//       // Perform additional actions after successful sign-in with Google
//     })
//     .catch((error) => {
//       console.log(error);
//       // Handle errors that occur during sign-in with Google
//     });
// };





// const SignInWithGoogle = (e) =>{
//   signInWithPopup(auth, provider).then((result) =>{
//     console.log(result)
//   })
// }



// function googlesignIn() {
//   const googleAuthProvider = new GoogleAuthProvider();
//   return signInWithPopup(auth, googleAuthProvider);
// }



// const signInWithGoogle = async(e) => {
//   e.preventDefault();
//  try {
//   await googlesignIn();
//   Navigate('/register')
//  }catch (error){
//   console.log(error.message)
//  }
// }

// const handleGoogleSignIn = async (e) => {
//   e.preventDefault();
//   try {
//     await googleSignIn();
//     navigate("/home");
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// console.log(inputs)

// const signInWithGoogle = (e)={
 
// }




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
 
    
     <button type='submit' onClick={handleLogin}>Login</button>
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
     <Link to="#" className='facebook google' >
     <img src='/assests/google icon.png' alt='' className='googleImg'
     onClick={signInWithGoogle}/>
    
     <span>Login with Google</span>
 
     </Link>
     </form>
     

     </div>
   )
 }
 
 export default Login
 
 //onClick={signInWithGoogle}