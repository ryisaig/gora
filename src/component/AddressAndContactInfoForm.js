import React from 'react';
import * as Color from '../constant/Color';
import { TextField, InputLabel} from '@material-ui/core';
import { SelectBox } from './SelectBox';

const AddressAndContactInfoForm = (props) => {

    const addressTextFieldStyle = {
        ...props.textFieldStyle,
        width: '600px'
    }

    return (

        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div>
                <h3 style={{marginLeft: '5px'}}>Address</h3>
                <TextField 
                    placeholder="Unit, Bldg" 
                    style={addressTextFieldStyle}
                    margin="dense"
                    label="Unit, Bldg"
                /><br/>
                <TextField 
                    placeholder="Street, Brgy" 
                    style={addressTextFieldStyle}
                    margin="dense"
                    label="Street, Brgy"
                /><br/>
                 <SelectBox 
                    label="Country" 
                    inputId="country" 
                    labelId="country-label" 
                    textFieldStyle={props.textFieldStyle}
                    items={[
                        {name: "Philippines", value: "ph"},
                        {name: "United States", value: "us"}
                ]}/><br/>          
                 <SelectBox 
                    label="State/Province" 
                    inputId="state" 
                    labelId="state-label" 
                    textFieldStyle={props.textFieldStyle}
                    items={[
                        {name: "Cavite", value: "cavite"},
                        {name: "Bulacan", value: "bulacan"}
                ]}/>
                <SelectBox 
                    label="City" 
                    inputId="city" 
                    labelId="city-label" 
                    textFieldStyle={props.textFieldStyle}
                    items={[
                        {name: "Manila", value: "manila"},
                        {name: "Makati", value: "makati"}
                ]}/>
            </div>
            <div>
                <h3 style={{marginLeft: '5px'}}>Contact Info</h3>
                <TextField 
                    placeholder="Telephone" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Telephone"
                />
                <TextField 
                    placeholder="Fax" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Fax"
                /><br/>
                <TextField 
                    placeholder="Mobile" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Mobile"
                />
                <TextField 
                    placeholder="Email Address" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Email Address"
                /><br/>
                <TextField 
                    placeholder="Contact Person" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Contact Person"
                />
                <TextField 
                    placeholder="Position" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Position"
                /><br/>
            </div>
        </div>
    )
}

export default AddressAndContactInfoForm;