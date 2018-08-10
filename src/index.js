import React from 'react';
import { render } from 'react-dom';
import 'index.css';
import App from 'containers/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from 'reducers/reducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import saga from 'sagas/saga'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers( applyMiddleware(sagaMiddleware)));

// store.subscribe

sagaMiddleware.run(saga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
