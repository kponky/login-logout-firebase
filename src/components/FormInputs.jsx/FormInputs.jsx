import React from 'react'
import './FormInputs.scss'

const FormInputs = (props) => {

  const {onChange, id, ...inputProps } = props;
  return (
  
    <div className='formInputs'>
    
    <input  {...inputProps} onChange={onChange}/>


    </div>
  );
};

export default FormInputs
    // <input placeholder={props.placeholder} /> initial values
   // <input{...inputProps} onChange={onChange} />
  //  <input placeholder={props.placeholder} /> initial values
