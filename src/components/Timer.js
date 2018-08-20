import React from 'react'
import { newTimer } from 'functions'
import { getModalStyle, stylesModalTimer } from 'styles'
import {
  Grid,
  TextField,
  Button,
  Paper,
  Modal,
  Typography,
  withStyles
} from '@material-ui/core'
import PropTypes from 'prop-types'

const ModalTimer = ({
  timer,
  buttonOnClick,
  onChangeTaskName,
  onChangeCloseModal,
  onChangeOpenModal,
  classes
}) => {
  const changeButton = () => {
    if (!timer.taskName && !timer.buttonText) {
      onChangeOpenModal(true)
    } else {
      buttonOnClick()
    }
  }

  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems='center'
        justify='center'
        direction='column'
        spacing={16}
      >
        <TextField
          className={classes.taskName}
          id='with-placeholder'
          placeholder='Name of your task'
          margin='normal'
          value={timer.taskName}
          onChange={onChangeTaskName}
        />
        <Paper className={classes.timer}>{newTimer(timer.countTimer)}</Paper>
        <Button
          size='small'
          variant='outlined'
          onClick={changeButton}
          color='inherit'
        >
          {timer.buttonText ? 'START' : 'STOP'}
        </Button>
        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={timer.openModal}
          onClose={onChangeCloseModal}
        >
          <Paper style={getModalStyle()} className={classes.paper}>
            <Typography variant='title' className={classes.modalTitleH2}>
              Empty task name
            </Typography>
            <Typography
              variant='subheading'
              id='simple-modal-description'
              className={classes.modalTitleH3}
            >
              You are trying close your task without name, enter the title and
              try again!
            </Typography>
            <Button
              size='medium'
              onClick={onChangeCloseModal}
              className={classes.buttonClose}
            >
              CLOSE
            </Button>
          </Paper>
        </Modal>
      </Grid>
    </Grid>
  )
}

ModalTimer.propTypes = {
  timer: PropTypes.object,
  onChangeTaskName: PropTypes.func,
  onChangeCloseModal: PropTypes.func,
  classes: PropTypes.object,
  buttonOnClick: PropTypes.func,
  onChangeOpenModal: PropTypes.func
}

export default withStyles(stylesModalTimer)(ModalTimer)
