import React from 'react';
import Logo from '../component/Logo';
import Link from '@material-ui/core/Link';
import * as Color from '../constant/Color';
import { TextField, Button } from '@material-ui/core';

export default class AccountRegistration extends React.Component{

    pageStyle = {
        minHeight: '94vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    }

    formStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: Color.LIGHT_BLUE,
        padding: '20px',
        borderRadius: '10px'
    }

    textFieldStyle = {
        margin: '6px',
        width: '320px'
    }

    buttonStyle = {
        margin: '6px',
        width: '320px', 
        fontSize: '16px', 
        display: 'block', 
        backgroundColor: Color.BLUE,
        color: '#FFF'
    }


    render(){
        return (            
            <div style={this.pageStyle}>    
                <div style={this.formStyle}>
                    <Logo/>
                    <span style={{color: Color.BLUE, fontWeight: 'bold', marginBottom: '20px'}}>Account Registration</span>
                    <TextField 
                        placeholder="Email" 
                        variant="outlined" 
                        style={this.textFieldStyle}
                        margin="dense"
                        InputProps={{
                            classes: {
                                focused: {borderColor: Color.LIGHT_BLUE}
                            }
                        }}/>
                    <TextField 
                        type="password"
                        autoComplete="current-password"
                        placeholder="Password" 
                        variant="outlined" 
                        margin="dense"
                        style={this.textFieldStyle}
                        InputProps={{
                            classes: {
                                focused: {borderColor: Color.LIGHT_BLUE}
                            }
                    }}/>
                     <TextField 
                        type="password"
                        autoComplete="current-password"
                        placeholder="Confirm Password" 
                        variant="outlined" 
                        margin="dense"
                        style={this.textFieldStyle}
                        InputProps={{
                            classes: {
                                focused: {borderColor: Color.LIGHT_BLUE}
                            }
                    }}/>
                     <Button  margin="dense" style={this.buttonStyle}>
                        Register
                    </Button>
                    <div style={{display:'inline'}}>
                        <Link href="/login">Login</Link>
                    </div>    
                </div>                
            </div>
        ) 
    }
}
