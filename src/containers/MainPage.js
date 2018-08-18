import React, { Component } from 'react'
import { connect } from 'react-redux'
import { timer } from 'actions/actionTimer'
import { tab } from 'actions/actionTab'
import ModalTimer from 'components/Timer'
import TabTask from 'components/TabTask/TabTask'
import moment from 'moment'
import { fieldsTasksLog } from 'constFields'
import { newTimer } from 'functions'
import { withStyles, Grid } from '@material-ui/core'
import { stylesMain } from 'styles'
import PropTypes from 'prop-types'

class MainPage extends Component {
  onClickStop = () => {
    if (!this.props.timer.taskName) {
      this.onChangeOpenModal(true)
      return
    }

    this.props.stopTimer()
    this.props.setTimer(0)
    this.props.changeTaskName('')
    this.props.changeButtonText(true)
    this.addTaskLog()
  };

  onClickStart = () => {
    this.props.setDateStart(moment().valueOf())
    this.props.startTimer()
    this.props.changeButtonText(false)
  };

  onChangeTaskName = e => {
    this.props.changeTaskName(e.target.value)
  };

  onChangeOpenModal = () => {
    this.props.handlerOpenModal(true)
  };

  onChangeCloseModal = () => {
    this.props.handlerOpenModal(false)
  };

  addTaskLog = () => {
    const { taskName, dateStart, countTimer } = this.props.timer
    const dateEnd = moment().valueOf()
    const newArrElement = {
      [fieldsTasksLog.taskName]: taskName,
      [fieldsTasksLog.dateStart]: dateStart,
      [fieldsTasksLog.dateEnd]: dateEnd,
      [fieldsTasksLog.countTimer]: newTimer(countTimer)
    }
    const newTasksLog = [...this.props.tab.tasksLog, newArrElement]
    this.props.changeTasksLog(newTasksLog)
  };

  render () {
    const { timer, classes, match, history } = this.props

    return (
      <div className={classes.root}>
        <Grid container alignItems='center' justify='center' direction='column'>
          <ModalTimer
            timer={timer}
            onClickStop={this.onClickStop}
            onClickStart={this.onClickStart}
            onChangeTaskName={this.onChangeTaskName}
            onChangeCloseModal={this.onChangeCloseModal}
          />
          <TabTask match={match} history={history} />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = ({ timer, tab }) => {
  return {
    timer,
    tab
  }
}

const mapDispatchToProps = {
  setTimer: timer.countTimer,
  changeButtonText: timer.buttonText,
  changeTaskName: timer.taskName,
  setDateStart: timer.dateStart,
  handlerOpenModal: timer.openModal,
  changeTasksLog: tab.tasksLog
}

MainPage.propTypes = {
  timer: PropTypes.object,
  tab: PropTypes.object,
  setTimer: PropTypes.func,
  changeButtonText: PropTypes.func,
  changeTaskName: PropTypes.func,
  setDateStart: PropTypes.func,
  handlerOpenModal: PropTypes.func,
  changeTasksLog: PropTypes.func,
  classes: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object,
  stopTimer: PropTypes.func,
  startTimer: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(stylesMain)(MainPage))
