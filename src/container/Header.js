import React from 'react';
import { Route, BrowserRouter as Router }  from 'react-router-dom';
import Login from '../container/Login';
import AccountRegistration from '../container/AccountRegistration';
import CompanyRegistration from '../container/CompanyRegistration';
import Home from '../container/Home';
import ForgotPassword from '../container/ForgotPassword';
import { isAuthenticated } from '../actions/UserAction';


export default class Header extends React.Component{

    render(){
        return (    
            <div>
                <Route path="/login" component={Login}/>      
                <Route path="/sign-up" component={AccountRegistration}/>
                <Route path="/forgot-password" component={ForgotPassword}/>
                <Route path="/register-company" component={CompanyRegistration}/> 
                <Route path="/home" component={Home}/> 
            </div>
        );
    }
}
