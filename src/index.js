import React from 'react';
import { render } from 'react-dom';
import 'index.css';
import App from 'containers/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from 'reducers/reducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import saga from 'sagas/saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { initialState } from 'consts';
import { getStateFromLocalStorage } from 'functions';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const localStorageState = localStorage.getItem('reducer')
  ? getStateFromLocalStorage(localStorage.getItem('reducer'))
  : initialState;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(reducer),
  localStorageState,
  composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);

store.subscribe(() => {
  localStorage.setItem('reducer', JSON.stringify(store.getState()));
});

store.dispatch({type: 'INIT_LOAD'})

sagaMiddleware.run(saga);

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
