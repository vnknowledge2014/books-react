import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({className, content}) => {
    return(
        <span class={className}>{content}</span>
    );
}

Tag.propTypes = {
    className: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

module.exports = Tag;