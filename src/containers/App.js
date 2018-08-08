import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timer } from 'actions/actionTimer';
import 'css/App.css';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import ModalTimer from 'components/Timer';

class App extends Component {
  onClickStop = () => {
    if (!this.props.timer.taskName) {
      this.onChangeOpenModal(true);
      return;
    }

    clearInterval(this.timerInterval);
    this.props.setDateEnd(moment().format('HH:mm:ss'));
    this.props.setTimer(0);
    this.props.changeTaskName('');
    this.props.changeButtonText(true);
  };

  onClickStart = () => {
    this.props.setDateStart(moment().format('HH:mm:ss'));
    this.timerInterval = setInterval(() => {
      this.props.setTimer(this.props.timer.countTimer + 1);
    }, 1000);
    this.props.changeButtonText(false);
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
    const { timer } = this.props;

    return (
      <div className="main-container">
        <Grid container alignItems="center" justify="center" direction="column">
          <ModalTimer
            timer={timer}
            onClickStop={this.onClickStop}
            onClickStart={this.onClickStart}
            onChangeTaskName={this.onChangeTaskName}
            onChangeCloseModal={this.onChangeCloseModal}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ timer }) => {
  return {
    timer,
  };
};

const mapDispatchToProps = {
  setTimer: timer.countTimer,
  changeButtonText: timer.buttonText,
  changeTaskName: timer.taskName,
  setDateStart: timer.dateStart,
  setDateEnd: timer.dateEnd,
  handlerOpenModal: timer.openModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
