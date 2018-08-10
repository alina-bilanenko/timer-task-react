import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timer } from 'actions/actionTimer';
import { tab } from 'actions/actionTab';
import ModalTimer from 'components/Timer';
import TabTask from 'components/TabTask/TabTask';
import 'css/App.css';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

import { newTimer, fieldsTasksLog } from 'functions';

class App extends Component {
  componentDidMount() {
    if (this.props.timer.countTimer) {
      this.timerInterval = setInterval(() => {
        this.props.setTimer(this.props.timer.countTimer + 1);
      }, 1000);
    }
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

  deleteTaskLog = ind => {
    const newTasksLog = this.props.tab.tasksLog.filter((item, i) => {
      return ind !== i;
    });
    this.props.changeTasksLog(newTasksLog);
  };

  render() {
    const { timer, changeTab, tab } = this.props;

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
          <TabTask
            changeTab={changeTab}
            openTabNumber={tab.openTabNumber}
            tasksLog={tab.tasksLog}
            deleteTaskLog={this.deleteTaskLog}
            dataForChart={tab.dataForChart}
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
  changeTab: tab.openTabNumber,
  changeTasksLog: tab.tasksLog,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
