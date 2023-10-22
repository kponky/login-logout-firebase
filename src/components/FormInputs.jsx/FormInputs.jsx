import React from 'react';
import './FormInputs.scss'

const FormInputs = (props) => {

    const {onChange, id,  ...inputProps} = props;

  return (
    <div className='formInput'>
      <input {...inputProps} onChange={onChange} />
    </div>
    
  )
}

export default FormInputs
