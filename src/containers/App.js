import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  countTimer,
  buttonText,
  taskName,
  dataStart,
  dataEnd,
  openModal,
} from '../actions/actionTimer';
import '../css/App.css';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import ModalTimer from '../components/Timer';

class App extends Component {
  onClickStopStart = () => {
    if (this.props.buttonText === 'STOP' && !this.props.taskName) {
      this.onChangeOpenModal(true);
      return;
    }

    if (this.props.buttonText === 'START') {
      this.props.setDateStart(moment().format('HH:mm:ss'));
      this.timer = setInterval(() => {
        this.props.setTimer(this.props.taskTime.countTimer + 1);
      }, 1000);
    } else {
      clearInterval(this.timer);
      this.props.setDateEnd(moment().format('HH:mm:ss'));
      this.props.setTimer(0);
      this.props.changeTaskName('');
    }
    this.props.changeButtonText();
  };

  onChangeTaskName = e => {
    this.props.changeTaskName(e.target.value);
  };

  onChangeOpenModal = () => {
    this.props.handlerOpenModal(true);
  };

  onChangeCloseModal = () => {
    this.props.handlerOpenModal(false);
  };

  render() {
    const { buttonText, taskTime, taskName, openModal } = this.props;

    return (
      <div className="main-container">
        <Grid container alignItems="center" justify="center" direction="column">
          <ModalTimer
            buttonText={buttonText}
            countTimer={taskTime.countTimer}
            taskName={taskName}
            openModal={openModal}
            onClickStopStart={this.onClickStopStart}
            onChangeTaskName={this.onChangeTaskName}
            onChangeCloseModal={this.onChangeCloseModal}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ taskTime, buttonText, taskName, openModal }) => {
  return {
    taskTime,
    buttonText,
    taskName,
    openModal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTimer: newTimer => dispatch(countTimer(newTimer)),
    changeButtonText: newText => dispatch(buttonText(newText)),
    changeTaskName: newName => dispatch(taskName(newName)),
    setDateStart: newDate => dispatch(dataStart(newDate)),
    setDateEnd: newDate => dispatch(dataEnd(newDate)),
    handlerOpenModal: isOpen => dispatch(openModal(isOpen)),
  };
};

App.propTypes = {
  openModal: PropTypes.bool,
  taskTime: PropTypes.object,
  buttonText: PropTypes.string,
  taskName: PropTypes.string,
  setTimer: PropTypes.func,
  changeButtonText: PropTypes.func,
  changeTaskName: PropTypes.func,
  setDateStart: PropTypes.func,
  setDateEnd: PropTypes.func,
  handlerOpenModal: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
