import React, { useState } from 'react'
import './FormInputs.scss'

const FormInputs = (props) => {

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused (true);
  }

  const {errorMessage, onChange, id, ...inputProps } = props;
  return (
  
    <div className='formInputs'>
    
    <input  {...inputProps} onChange={onChange}
    onFocus={()=>inputProps.name === "confirmPasswrd" && setFocused(true)}
    onBlur={handleFocus} focused={focused.toString()}/>
    <span className='errorMessage'>{errorMessage}</span>


    </div>
  );
};

export default FormInputs
    // <input placeholder={props.placeholder} /> initial values
   // <input{...inputProps} onChange={onChange} />
  //  <input placeholder={props.placeholder} /> initial values
