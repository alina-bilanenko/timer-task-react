import React from 'react'
import { render } from 'react-dom'
import 'index.css'
import App from 'containers/App'
import { createStore, applyMiddleware, compose } from 'redux'
import { reducer } from 'reducers/reducer'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import saga from 'sagas/saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { initialState } from 'consts'
import { getStateFromLocalStorage } from 'functions'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const localStorageState = localStorage.getItem('reducer')
  ? getStateFromLocalStorage(localStorage.getItem('reducer'))
  : initialState

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const saveLocalStorage = (reducer) => {
  return (state, action) => {
    const result = reducer(state, action)
    localStorage.setItem('reducer', JSON.stringify(result))
    return result
  }
}

const store = createStore(
  connectRouter(history)(saveLocalStorage(reducer)),
  localStorageState,
  composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
)

sagaMiddleware.run(saga)

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
)
