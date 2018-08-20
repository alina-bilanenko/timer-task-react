import React, { Component } from 'react'
import { connect } from 'react-redux'
import { timer } from 'actions/actionTimer'
import { tab } from 'actions/actionTab'
import ModalTimer from 'components/Timer'
import TabTask from 'components/TabTask/TabTask'
import { withStyles, Grid } from '@material-ui/core'
import { stylesMain } from 'styles'
import PropTypes from 'prop-types'

class MainPage extends Component {
  onChangeTaskName = e => {
    this.props.changeTaskName(e.target.value)
  };

  onChangeOpenModal = () => {
    this.props.handlerOpenModal(true)
  };

  onChangeCloseModal = () => {
    this.props.handlerOpenModal(false)
  };

  render () {
    const { timer, classes, match, history, changeButtonText } = this.props

    return (
      <div className={classes.root}>
        <Grid container alignItems='center' justify='center' direction='column'>
          <ModalTimer
            timer={timer}
            buttonOnClick={changeButtonText}
            onChangeTaskName={this.onChangeTaskName}
            onChangeCloseModal={this.onChangeCloseModal}
            onChangeOpenModal={this.onChangeOpenModal}
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
  changeButtonText: PropTypes.func,
  changeTaskName: PropTypes.func,
  handlerOpenModal: PropTypes.func,
  classes: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(stylesMain)(MainPage))
