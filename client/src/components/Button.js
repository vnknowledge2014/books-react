import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classStyles, eventOnClick, content, eventOnSubmit, disabledEvent }) => {
    return(
        <button className={classStyles} onClick={eventOnClick} disabled={disabledEvent}>{content}</button>
    );
}

Button.propTypes = {
    content: PropTypes.string,
    classStyles: PropTypes.string.isRequired,
    eventOnClick: PropTypes.func,
    eventOnSubmit: PropTypes.func,
    disabledEvent: PropTypes.bool,
}

export default Button;