import React from 'react'
import './Register.scss'
import FormInputs from '../../components/FormInputs.jsx/FormInputs'

const Register = () => {
  return (
    <div className='register'>
    <form>
    <FormInputs placeholder = "username"/>
    <FormInputs placeholder = "email"/>
       
    </form>
   
    </div>
  )
}

export default Register
