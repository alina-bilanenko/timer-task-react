import React from 'react';
import {
  Grid,
  TextField,
  Button,
  Paper,
  Modal,
  Typography,
  withStyles,
} from '@material-ui/core';
import { newTimer } from 'functions'

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 2,
  },
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Timer = ({
  timer,
  onClickStop,
  onClickStart,
  onChangeTaskName,
  onChangeCloseModal,
  classes,
}) => {

  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        spacing={16}
      >
        <TextField
          className="task-name"
          id="with-placeholder"
          placeholder="Name of your task"
          margin="normal"
          value={timer.taskName}
          onChange={onChangeTaskName}
        />
        <Paper className="timer">{newTimer(timer.countTimer)}</Paper>
        <Button
          size="small"
          variant="outlined"
          onClick={timer.buttonText ? onClickStart : onClickStop}
          color="inherit"
        >
          {timer.buttonText ? 'START' : 'STOP'}
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={timer.openModal}
          onClose={onChangeCloseModal}
        >
          <Paper style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" className="modal-title-h2">
              Empty task name
            </Typography>
            <Typography
              variant="subheading"
              id="simple-modal-description"
              className="modal-title-h3"
            >
              You are trying close your task without name, enter the title and
              try again!
            </Typography>
            <Button
              size="medium"
              onClick={onChangeCloseModal}
              className="button-close"
            >
              CLOSE
            </Button>
          </Paper>
        </Modal>
      </Grid>
    </Grid>
  );
};

const ModalTimer = withStyles(styles)(Timer);

export default ModalTimer;
