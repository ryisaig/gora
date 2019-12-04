import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ProfileMenu from '../component/ProfileMenu';
import { TextField, Button } from '@material-ui/core';
import TourForm from '../component/TourForm';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 900,
    height: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export default function AddTourModal(props) {

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div >
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        open={props.open}
        onClose={props.handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
                <TourForm textFieldStyle={props.textFieldStyle} handleClose={props.handleClose}/>
                <div style={{padding: '20px'}}>
                <Button  margin="dense" style={props.buttonStyle}>
                     Save
                </Button>
                 <Button  margin="dense" style={props.buttonStyle} onClick={props.handleClose}> 
                     Close
                 </Button>
                 </div>
          </div>      
      </Modal>
    </div>
  );
}