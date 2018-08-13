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
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { initialState } from 'consts'
import { Route, Switch } from 'react-router'
import Info  from "components/TabTask/Info";
import TaskLog from 'components/TabTask/TasksLog';
import TaskChart from 'components/TabTask/TasksChart';
import { dataForTaskChart } from 'functions';


const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const countTransform = createTransform(
  inboundState => inboundState,
  outboundState => {
    return {
      ...outboundState,
      countTimer: countTransformPersist(outboundState),
      dataForChart: dataForTaskChart(outboundState.taskLog.taskLog)
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
  connectRouter(history)(persistedReducer),
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);
const persistor = persistStore(store);

sagaMiddleware.run(saga);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/app/:name" component={App} />
          <Route exact path="/tasks-log" component={TaskLog} />
          <Route exact path="/tasks-chart" component={TaskChart} />
          <Route exact path="/tasks/:id" component={Info} />
          <Route component={App} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
