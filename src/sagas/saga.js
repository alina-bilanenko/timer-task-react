import { call, put, takeEvery } from 'redux-saga/effects'
import { tab } from 'actions/actionTab'
import { dataForTaskChart } from 'functions'

function* saga() {
  yield takeEvery('TASKS_LOG', dispatchDataForChart);
}

function* dispatchDataForChart(params) {
  const actionTasksLog = yield call(tab.tasksLog, params);
  yield put(tab.dataForChart(dataForTaskChart(actionTasksLog.taskLog.taskLog)));
}

export default saga;