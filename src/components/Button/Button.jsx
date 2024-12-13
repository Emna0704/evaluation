import React from 'react';
import './Button.css';

const Button = ({ onClick, label, styleType = 'primary' }) => {
  return (
    <button className={`button ${styleType}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
