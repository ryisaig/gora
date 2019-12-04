import React from 'react';
import * as Color from '../constant/Color'

export const Footer = () => (<div style={{
    position: 'absolute', 
    width: '100%', 
    height: '6vh', 
    backgroundColor: Color.BLACK, 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}
  >
    <span style={{color: '#FFFFFF', fontSize: '14px'}}>© Gora Inc . All Rights Reserved.</span>
  </div>);