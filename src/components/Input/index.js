import React from 'react'
import './input.style.scss'
import InputMask from 'react-input-mask';

const Input = ({  name, label, mask }) => {
    return (
        <div className='input-field'>
            <label for={ name } className='input-field__label'>{ label }</label>
            <InputMask id={ name } name={ name } className={ 'input-field__input' } mask={ mask } />
        </div>
    );
  };
  

  export default Input