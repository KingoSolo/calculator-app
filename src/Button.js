import React from 'react';

const Button = ({ label,onClick,style }) => {
  return (
    <button className="calculator-button" onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default Button;
