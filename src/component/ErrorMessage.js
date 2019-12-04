import React from 'react';
import * as Color from '../constant/Color';

const ErrorMessage = (props) => {
  
    let style = {
      color: Color.RED,
      fontSize: '12px',
      visibility: props.isVisible ? 'visible': 'hidden',
      ...props.style
    }

    return (
      
        <span style={style}>* {props.message}</span>
    )
}

export default ErrorMessage;