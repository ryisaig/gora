import React from 'react';
import { TextField, FormControlLabel, Checkbox, InputLabel} from '@material-ui/core';

const TourDetailsForm = (props) => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', paddingLeft : '20px', overflow: 'scroll', height: '500'}}>
            <h4>Fill-up details below</h4>
            <div>
                <TextField 
                    placeholder="Place" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Place"
                />
                <TextField 
                    placeholder="Type of Tour" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Type of Tour"
                />
                 <TextField 
                        placeholder="Side Trip" 
                        style={props.textFieldStyle}
                        margin="dense"
                        label="Side Trip"
                    />
            </div>
            <div>
                <TextField 
                    placeholder="Availability Start Date" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Availability Start Date"
                    type="date"
                    value="2020-01-01"
                />
                <TextField 
                    placeholder="Tour End Date" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Tour End Date"
                    type="date"
                    value="2020-01-01"
                />
                 <TextField 
                    placeholder="Start Time" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Start Time"
                    type="time"
                    value="00:00"
                />
                <TextField 
                    placeholder="End Time" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="End Time"
                    type="time"
                    value="00:00"
                />
                 <TextField 
                    placeholder="Duration" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Duration"
                    type="number"
                />
            </div>
        
            <div>
                <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" />}
                    label="Promo"
                    labelPlacement="end"
                    style={{marginRight: "240px", marginLeft: "5px", marginTop: "10px"}}
                    />
                <TextField 
                    placeholder="Number of Guests" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Number of Guests"
                    type="number"
                />
            </div>
            <div>
                <TextField 
                    placeholder="Total Rate" 
                    style={props.textFieldStyle}
                    margin="dense"
                    label="Total Rate"
                    type="number"
                />
                <TextField 
                    placeholder="Promo Start Date" 
                    style={{...props.textFieldStyle, width: '155px'}}                    
                    margin="dense"
                    label="Promo Start Date"
                    type="date"
                    value="2020-01-01"
                />
                  <TextField 
                    placeholder="Promo End Date" 
                    style={{...props.textFieldStyle, width: '155px'}}
                    margin="dense"
                    label="Promo End Date"
                    type="date"
                    value="2020-01-01"
                />
            </div>
            <div>
                <h5>Inclusions</h5>
                <div>
                    <TextField 
                            placeholder="Free Meals" 
                            style={props.textFieldStyle}
                            margin="dense"
                            label="Free Meals"
                    />
                     <TextField 
                            placeholder="Rate Per Pax" 
                            style={props.textFieldStyle}
                            margin="dense"
                            label="Rate Per Pax"
                            type="number"
                    />
                </div>
                <div>
                    <TextField 
                            placeholder="Gas" 
                            style={props.textFieldStyle}
                            margin="dense"
                            label="Gas"
                    />
                     <TextField 
                            placeholder="Accomodation" 
                            style={props.textFieldStyle}
                            margin="dense"
                            label="Accomodation"
                    />
                </div>
                <div>
                    <TextField 
                            placeholder="Entrance Fee" 
                            style={props.textFieldStyle}
                            margin="dense"
                            label="Entrance Fee"
                            type="number"
                    />
                     <TextField 
                            placeholder="Toll" 
                            style={props.textFieldStyle}
                            margin="dense"
                            label="Toll"
                    />
                </div>
                <div>
                    <TextField 
                            placeholder="Spots to Visit" 
                            style={{...props.textFieldStyle, float: 'left' }}
                            margin="normal"
                            label="Spots to Visit"
                            multiline
                            rows="5"
                            variant="filled"
                    />
                    <div>
                        <InputLabel>&nbsp;Photos</InputLabel>
                        <TextField 
                            style={props.textFieldStyle}
                            margin="dense"
                            type="file"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourDetailsForm;