import React from 'react';
import Logo from '../component/Logo';
import Link from '@material-ui/core/Link';
import * as Color from '../constant/Color';
import Icon from '@material-ui/core/Icon';
import { TextField, Button } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import CompanyBasicInfoForm from '../component/CompanyBasicInfoForm';
import DocumentAttachmentsForm from '../component/DocumentAttachmentsForm';
import AddressAndContactInfoForm from '../component/AddressAndContactInfoForm';
import BankDetailsForm from '../component/BankDetailsForm';
import PreviewRegistration from '../component/PreviewRegistration';
import SecurityQuestions from '../component/SecurityQuestions';


export default class CompanyRegistration extends React.Component{
    pageStyle = {
        minHeight: '94vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }

    headerStyle = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: Color.LIGHT_BLUE,
        width: '100%'
    }

    formStyle= {
        backgroundColor: '#FFF', 
        paddingLeft: '2vw',  
        display: 'flex', 
        flexDirection: 'column',  
        alignItems: 'center',
        width: '97vw',
        padding: '10px'
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
        color: '#FFF',
        marginTop: '20px'
    }
    
    state = {
      activeStep : 0
    }
    
    steps = ['Basic Info', 'Documents', 'Address and Contact Info', 'Bank Details', 'Security Questions', 'Preview'];

    handleContinue = () => {
        const nextStep = ++this.state.activeStep;
        this.setState({activeStep: nextStep})
    }

    render(){
        const activeForm = this.state.activeStep;
        let form = null;
        switch(activeForm){
            case 0: 
                form = <CompanyBasicInfoForm textFieldStyle={this.textFieldStyle}/>;
                break;
            case 1:
                form = <DocumentAttachmentsForm textFieldStyle={this.textFieldStyle}/>;
                break;
            case 2:
                form = <AddressAndContactInfoForm textFieldStyle={this.textFieldStyle}/>;
                break;
            case 3:
                form = <BankDetailsForm textFieldStyle={this.textFieldStyle}/>;
                break;
            case 4:
                form = <SecurityQuestions textFieldStyle={this.textFieldStyle}/>;
                break;
            case 5:
                form = <PreviewRegistration textFieldStyle={this.textFieldStyle}/>;
                break;
            default:
                form = <CompanyBasicInfoForm textFieldStyle={this.textFieldStyle}/>;
        }
        return (            
            <div style={this.pageStyle}>
                <div style={this.headerStyle}>
                    <Logo style={{width: '240px'}}/>
                </div>
                <div style={this.formStyle}>
                    <Stepper alternativeLabel activeStep={this.state.activeStep}>
                        {this.steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    {form}
                    <Button  margin="dense" style={this.buttonStyle} onClick={this.handleContinue}>
                        Continue
                    </Button>
                </div>  
            </div>
        )
    }
}
