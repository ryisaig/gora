import React from 'react';
import Logo from '../component/Logo';
import Link from '@material-ui/core/Link';
import * as Color from '../constant/Color';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { login } from '../actions/UserAction';

export class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          authenticated: false
        }
    }

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
                    <span style={{color: Color.BLUE, fontWeight: 'bold', marginBottom: '20px'}}>Partner's Login</span>
                    <TextField 
                        placeholder="Username / Email" 
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
                     <Button  margin="dense" style={this.buttonStyle}>
                        Login
                    </Button>
                    <div style={{display:'inline'}}>
                        <Link href="/sign-up" style={{marginRight: '24px'}}>Be our Partner</Link>
                        <Link href="/forgot-password">Forgot Password</Link>                   
                    </div>   
                </div>                
            </div>
        ) 
    }
}

function mapStateToProps(state) {
    return {
      user: state.user
    }
  }

export default connect(mapStateToProps, { login })(Login);
  