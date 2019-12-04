import React from 'react';
import * as Color from '../constant/Color';
import { TextField, InputLabel} from '@material-ui/core';
import { SelectBox } from './SelectBox';

const BankDetailsForm = (props) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <h3 style={{marginLeft: '5px'}}>Bank Details</h3>
            <div>
                <h5 style={{marginLeft: '5px'}}>Bank Account 1</h5>
                <TextField 
                    placeholder="Bank Name" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Bank Name"
                /><br/>
                 <TextField 
                    placeholder="Account Number" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Account Number" 
                />
            </div>
            <div>
                <h5 style={{marginLeft: '5px'}}>Bank Account 2</h5>
                <TextField 
                    placeholder="Bank Name" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Bank Name"
                /><br/>
                 <TextField 
                    placeholder="Account Number" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Account Number" 
                />
            </div>
        </div>
    )
}

export default BankDetailsForm;