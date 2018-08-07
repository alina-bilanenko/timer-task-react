import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import moment from 'moment/moment';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
  buttonText,
  countTimer,
  onClickStopStart,
  taskName,
  onChangeTaskName,
  openModal,
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
          value={taskName}
          onChange={onChangeTaskName}
        />
        <Paper className="timer">
          {moment(0)
            .set({ hour: 0, minute: 0, second: 0 })
            .add(countTimer, 's')
            .format('HH:mm:ss')}
        </Paper>
        <Button
          size="small"
          variant="outlined"
          onClick={onClickStopStart}
          color="inherit"
        >
          {buttonText}
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={openModal}
          onClose={onChangeCloseModal}
        >
          <Paper style={getModalStyle()} className={classes.paper} id="modal">
            <Typography variant="title" id="modal-title">
              Empty task name
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
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
