import React from 'react';
import { render } from 'react-dom';
import 'index.css';
import App from 'containers/App';
import { createStore, compose } from 'redux';
import { reducer } from 'reducers/reducer';
import { Provider } from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
