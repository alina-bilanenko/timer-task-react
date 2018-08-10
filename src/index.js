import React from 'react';
import { render } from 'react-dom';
import 'index.css';
import App from 'containers/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from 'reducers/reducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import saga from 'sagas/saga';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { countTransformPersist } from 'functions';

const sagaMiddleware = createSagaMiddleware();

const countTransform = createTransform(
  inboundState => inboundState,
  outboundState => {
    return {
      ...outboundState,
      countTimer: countTransformPersist(outboundState),
    };
  }
);

const persistConfig = {
  key: 'root',
  storage,
  transforms: [countTransform],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
const persistor = persistStore(store);

sagaMiddleware.run(saga);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
