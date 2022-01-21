import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';


/**
 * Primary UI component for user interaction
 */
const Input = ({ name, label, mask }) => {
  
  return (
    <div className='input-field'>
        <label for={ name } className='input-field__label'>{ label }</label>
        <InputMask id={ name } name={ name } className={ 'input-field__input' } mask={ mask } />
    </div>
  );
};

Input.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  name: PropTypes.string.isRequired,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
    name: 'sample',
    label: 'Example Heading'
};

export default Input;