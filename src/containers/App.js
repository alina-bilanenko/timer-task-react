import React, { Component } from 'react'
import { connect } from 'react-redux'
import { timer } from 'actions/actionTimer'
import { Route, Switch } from 'react-router'
import Info from 'components/TabTask/Info'
import TaskLog from 'components/TabTask/TasksLog'
import TaskChart from 'components/TabTask/TasksChart'
import MainPage from 'containers/MainPage'
import { ConnectedRouter } from 'connected-react-router'
import PropTypes from 'prop-types'

class App extends Component {
  componentDidMount () {
    if (!this.props.timer.buttonText) {
      this.props.timerContinue()
    }
  }

  render () {
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route
            path='/timer/:name'
            // render={props => <MainPage {...props} {...timerProps} />}
            component={MainPage}
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
  timerContinue: timer.timerContinue
}

App.propTypes = {
  timer: PropTypes.object,
  timerContinue: PropTypes.func,
  history: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
