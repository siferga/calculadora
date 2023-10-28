import React from 'react';
import '../styleSheets/Button.css';

function Button(props) {

  const isOperator = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };
  return (
    <div
      className={`button-container ${isOperator(props.children) ? 'operator' : null}`}>
      {props.children}
    </div>
  );
}

export default Button;