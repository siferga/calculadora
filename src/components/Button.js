import React from 'react';
import '../styleSheets/Button.css';

function Button(props) {

  const isOperator = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };

  return (
    <div
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.controlClicK(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;