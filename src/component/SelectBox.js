import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';

export const SelectBox = (props) => (
    <FormControl  style={props.textFieldStyle} margin="dense" label={props.label}>
    <InputLabel id={props.labelId}>{props.label}</InputLabel>
    <Select
        labelId={props.labelId}
        id={props.inputId}>
            {props.items.map(function(item){
                return <MenuItem value={item.value}>{item.name}</MenuItem>
            })}
    </Select>
    </FormControl>
);