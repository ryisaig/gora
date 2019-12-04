import React from 'react';
import BigLogo from '../assets/images/big-logo.jpg';
import SmallLogo from '../assets/images/small-logo.jpg';

const Logo = (props) => {
  
    let style = {
        width: '400px',
        ...props.style
    }

    return (
        <img 
            style={style}
            src={SmallLogo}/>
    )
}

export default Logo;