import React from 'react';

const CustomInput = ({ label, onChange, ...otherProps }) => (
  <input {...otherProps}></input>
);

export default CustomInput;
