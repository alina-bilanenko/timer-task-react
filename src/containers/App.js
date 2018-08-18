import React, { Component } from 'react'
import { connect } from 'react-redux'
import { timer } from 'actions/actionTimer'
import { Route, Switch } from 'react-router'
import Info from 'components/TabTask/Info'
import TaskLog from 'components/TabTask/TasksLog'
import TaskChart from 'components/TabTask/TasksChart'
import MainPage from 'containers/MainPage'
import { ConnectedRouter } from 'connected-react-router'

class App extends Component {
  componentDidMount () {
    if (!this.props.timer.buttonText) {
      this.startTimer()
    }
  }

  startTimer = () => {
    if (this.timerInterval) return
    this.timerInterval = setInterval(() => {
      this.props.setTimer(this.props.timer.countTimer + 1)
    }, 1000)
  };

  stopTimer = () => {
    clearInterval(this.timerInterval)
  };

  componentWillUnmount () {
    this.stopTimer()
  }

  render () {
    const timerProps = {
      stopTimer: this.stopTimer,
      startTimer: this.startTimer
    }

    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route
            path='/timer/:name'
            render={props => <MainPage {...props} {...timerProps} />}
          />
          <Route exact path='/tasks-log' component={TaskLog} />
          <Route exact path='/tasks-chart' component={TaskChart} />
          <Route exact path='/tasks/:id' component={Info} />
          <Route component={MainPage} />
        </Switch>
      </ConnectedRouter>
    )
  }
}

const mapStateToProps = ({ timer, tab, router }) => {
  return {
    timer,
    tab,
    router
  }
}

const mapDispatchToProps = {
  setTimer: timer.countTimer
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
