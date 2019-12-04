import React from 'react';
import * as Color from '../constant/Color';
import ProfileMenu from '../component/ProfileMenu';
import { TextField, Button } from '@material-ui/core';
import TourList from '../component/TourList';
import AddTourModal from '../component/AddTourModal';

export default class Home extends React.Component{

    state = {
        addTourModalOpen: false
    }

    handleOpen = () => {
        this.setState({addTourModalOpen: true})
    };
  
    handleClose = () => {
        this.setState({addTourModalOpen: false})
    };

    pageStyle = {
        minHeight: '94vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }

    addButtonStyle = {
        margin: '6px',
        width: '150px', 
        fontSize: '16px', 
        display: 'block', 
        float: 'right',
        backgroundColor: Color.BLUE,
        color: '#FFF',
        textAlign: 'center'
    }

    normalButtonStyle = {
        margin: '6px',
        width: '150px', 
        fontSize: '16px', 
        display: 'block', 
        float: 'right',
        backgroundColor: Color.GRAY,
        color: '#FFF',
        textAlign: 'center'
    }

    headerStyle = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: Color.LIGHT_BLUE,
        width: '100%'
    }

    handleContinue = () => {
        const nextStep = ++this.state.activeStep;
        this.setState({activeStep: nextStep})
    }

    render(){
        return (    

            <div style={this.pageStyle}>
                <ProfileMenu title="Home Page"/>
                <div style={{padding: '20px', width: '97vw'}}>
                    <div style={{float: 'right'}}>
                        <Button  margin="dense" style={this.normalButtonStyle}  href="/copy-tour">
                                
                                Copy Tour
                        </Button>
                        <Button  margin="dense" style={this.normalButtonStyle}  href="/edit-tour">
                                
                                Edit Tour
                        </Button>
                       
                        <Button  margin="dense" style={this.addButtonStyle} onClick={this.handleOpen}>
                                Add Tour
                        </Button>
                       
                    </div><br/><br/>
                    <TourList/>
                </div>
                <AddTourModal 
                    open={this.state.addTourModalOpen}
                    handleClose={this.handleClose}
                    textFieldStyle={this.textFieldStyle} 
                    buttonStyle={this.buttonStyle} 
                    pageStyle={this.pageStyle}/>
            </div>
        )
    }
}
