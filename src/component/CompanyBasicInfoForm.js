import React from 'react';
import * as Color from '../constant/Color';
import SpecializationTransferList from '../component/SpecializationTransferList';
import { TextField, InputLabel} from '@material-ui/core';
import { SelectBox } from './SelectBox';

const CompanyBasicInfoForm = (props) => {

    return (
        <div>
            <h3 style={{marginLeft: '5px'}}>Basic Info</h3>

            <div style={{display: 'block', float: 'left' , marginRight: '10px'}}>
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <TextField 
                        placeholder="Agency Name" 
                        style={props.textFieldStyle}
                        margin="dense"
                        label="Agency Name"
                    />
                    <TextField 
                        placeholder="IATA Number" 
                        style={props.textFieldStyle}
                        margin="dense"
                        label="IATA Number"
                    />
                    <TextField 
                        placeholder="Company Name" 
                        style={props.textFieldStyle}
                        margin="dense"
                        label="Company Name"
                    />
                    <TextField 
                        placeholder="TIN" 
                        style={props.textFieldStyle}
                        margin="dense"
                        label="TIN"
                    />
                    <TextField 
                        type="date"
                        style={props.textFieldStyle}
                        margin="dense"
                        label="Business Permit expiry"
                        value="2020-01-01"
                    />
                    <SelectBox 
                        label="Agency Type" 
                        inputId="agency-type" 
                        labelId="agency-type-label" 
                        textFieldStyle={props.textFieldStyle}
                        items={[
                            {name: "Tour Operator", value: "tour-operator"},
                            {name: "Others", value: "others"}
                    ]}/>
                    
                </div>
            </div>
            <div  style={{display: 'block', float: 'right', marginTop: '25px'}}>
                <InputLabel style={{marginLeft: '20px', marginBottom: '10px'}}>Agency Specializaton</InputLabel>
                <SpecializationTransferList/>
            </div>
        </div>
    )
}

export default CompanyBasicInfoForm;