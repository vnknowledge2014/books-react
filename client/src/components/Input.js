import React from 'react';
import PropTypes from 'prop-types';

const Input = ({classStyles, typeInput, name, placeholder, onChangeEvent, data}) => {
    return (
        <input className={classStyles} type={typeInput} name={name} placeholder={placeholder} onChange={onChangeEvent} value={data} />
    );
}

Input.propTypes = {
    classStyles: PropTypes.string.isRequired,
    typeInput: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChangeEvent: PropTypes.func, 
    data: PropTypes.string,
}

export default Input;