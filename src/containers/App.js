import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timer } from 'actions/actionTimer';
import { tab } from 'actions/actionTab';
import ModalTimer from 'components/Timer';
import TabTask from 'components/TabTask/TabTask';
import moment from 'moment';
import { fieldsTasksLog } from 'constFields'
import { newTimer } from 'functions';
import { withStyles, Grid } from '@material-ui/core';
import { stylesApp} from "styles";

class App extends Component {

  componentDidMount() {
    if (!this.props.timer.buttonText) {
      this.timerInterval = setInterval(() => {
        this.props.setTimer(this.props.timer.countTimer + 1);
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  onClickStop = () => {
    if (!this.props.timer.taskName) {
      this.onChangeOpenModal(true);
      return;
    }

    clearInterval(this.timerInterval);
    this.props.setTimer(0);
    this.props.changeTaskName('');
    this.props.changeButtonText(true);
    this.addTaskLog();
  };

  onClickStart = () => {
    this.props.setDateStart(moment().valueOf());

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

  addTaskLog = () => {
    const { taskName, dateStart, countTimer } = this.props.timer;
    const dateEnd = moment().valueOf();
    const newArrElement = {
      [fieldsTasksLog.taskName]: taskName,
      [fieldsTasksLog.dateStart]: dateStart,
      [fieldsTasksLog.dateEnd]: dateEnd,
      [fieldsTasksLog.countTimer]: newTimer(countTimer),
    };
    const newTasksLog = [...this.props.tab.tasksLog, newArrElement];
    this.props.changeTasksLog(newTasksLog);
  };


  render() {
    const { timer,
      classes,
      match,
      history
    } = this.props;

    return (
      <div className={classes.root}>
        <Grid container alignItems="center" justify="center" direction="column">
          <ModalTimer
            timer={timer}
            onClickStop={this.onClickStop}
            onClickStart={this.onClickStart}
            onChangeTaskName={this.onChangeTaskName}
            onChangeCloseModal={this.onChangeCloseModal}
          />
          <TabTask
            match={match}
            history={history}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ timer, tab }) => {
  return {
    timer,
    tab,
  };
};

const mapDispatchToProps = {
  setTimer: timer.countTimer,
  changeButtonText: timer.buttonText,
  changeTaskName: timer.taskName,
  setDateStart: timer.dateStart,
  handlerOpenModal: timer.openModal,
  changeTasksLog: tab.tasksLog,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(stylesApp)(App));
