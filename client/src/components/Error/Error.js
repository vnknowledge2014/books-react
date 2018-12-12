import React from 'react';

const Error = ({ classStyle, error }) => <p className={classStyle}>{ error.message }</p>;

export default Error;