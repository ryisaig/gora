import React from 'react';
import * as Color from '../constant/Color';
import { TextField, InputLabel} from '@material-ui/core';
import { SelectBox } from './SelectBox';

const SecurityQuestions = (props) => {

    const textFieldStyle = {
        ...props.textFieldStyle,
        width: '600px'
    }
    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div>
                <SelectBox 
                        label="Question 1" 
                        inputId="question1" 
                        labelId="question1-label" 
                        textFieldStyle={textFieldStyle}
                        items={[
                            {name: "Tour Operator", value: "tour-operator"},
                            {name: "Others", value: "others"}
                ]}/><br/>
                 <TextField 
                    placeholder="Answer 1" 
                    style={textFieldStyle}
                    margin="dense"
                    label="Answer 1" 
                />
            </div>
            <div>
                <SelectBox 
                        label="Question 2" 
                        inputId="question2" 
                        labelId="question2-label" 
                        textFieldStyle={textFieldStyle}
                        items={[
                            {name: "Tour Operator", value: "tour-operator"},
                            {name: "Others", value: "others"}
                ]}/><br/>
                 <TextField 
                    placeholder="Answer 2" 
                    style={textFieldStyle}
                    margin="dense"
                    label="Answer 2" 
                />
            </div>
            <div>
                <SelectBox 
                        label="Question 3" 
                        inputId="question3" 
                        labelId="question3-label" 
                        textFieldStyle={textFieldStyle}
                        items={[
                            {name: "Tour Operator", value: "tour-operator"},
                            {name: "Others", value: "others"}
                ]}/><br/>
                 <TextField 
                    placeholder="Answer 3" 
                    style={textFieldStyle}
                    margin="dense"
                    label="Answer 3" 
                />
            </div>
        </div>
    )
}

export default SecurityQuestions;