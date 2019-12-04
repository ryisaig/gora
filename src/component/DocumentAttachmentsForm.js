import React from 'react';
import * as Color from '../constant/Color';
import SpecializationTransferList from '../component/SpecializationTransferList';
import { TextField, InputLabel} from '@material-ui/core';
import { SelectBox } from './SelectBox';

const DocumentAttachmentsForm = (props) => {

    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <h3 style={{marginLeft: '5px'}}>Documents</h3>
            <div style={{marginBottom: '20px'}}>
                <InputLabel style={{marginLeft: '5px'}}>Logo</InputLabel>
                <TextField 
                    style={props.textFieldStyle}
                    margin="dense"
                    type="file"
                />
            </div>
            <div style={{marginBottom: '20px'}}>
                <InputLabel style={{marginLeft: '5px'}}>Business Permit</InputLabel>
                <TextField 
                    style={props.textFieldStyle}
                    margin="dense"
                    type="file"
                />
            </div>
            <div style={{marginBottom: '20px'}}>
                <InputLabel style={{marginLeft: '5px'}}>DTI</InputLabel>
                <TextField 
                    style={props.textFieldStyle}
                    margin="dense"
                    type="file"
                />
            </div>
            <div style={{marginBottom: '20px'}}>
                <InputLabel style={{marginLeft: '5px'}}>SEC</InputLabel>
                <TextField 
                    style={props.textFieldStyle}
                    margin="dense"
                    type="file"
                />
            </div>
        </div>
    )
}

export default DocumentAttachmentsForm;