import { call, put, takeEvery, all, select } from 'redux-saga/effects'
import { tab } from 'actions/actionTab'
import { timer } from 'actions/actionTimer'
import { dataForTaskChart, newTimer } from 'functions'
import moment from 'moment/moment'
import { fieldsTasksLog } from 'constFields'
import { delay } from 'redux-saga'

function * dispatchDataForChart (params) {
  const actionTasksLog = yield call(tab.tasksLog, params)
  yield put(tab.dataForChart(dataForTaskChart(actionTasksLog.taskLog.taskLog)))
}

function * changeTypeButton () {
  const timerState = yield select((state) => state.timer)

  if (timerState.buttonText) {
    yield call(onClickStop)
  } else {
    yield put(timer.dateStart(moment().valueOf()))
    yield call(onClickStart)
  }
}

export function * onClickStart () {
  let isStart = yield select(state => state.timer.buttonText)
  while (!isStart) {
    yield call(delay, 1000)

    const { buttonText, countTimer: count } = yield select(state => state.timer)
    isStart = buttonText;

    if (isStart) break

    yield put(timer.countTimer(count + 1))
  }
}

function * onClickStop () {
  const { taskName, dateStart, countTimer } = yield select(state => state.timer)
  const tasksLog = yield select(state => state.tab.tasksLog)
  const dateEnd = moment().valueOf()
  const newArrElement = {
    [fieldsTasksLog.taskName]: taskName,
    [fieldsTasksLog.dateStart]: dateStart,
    [fieldsTasksLog.dateEnd]: dateEnd,
    [fieldsTasksLog.countTimer]: newTimer(countTimer)
  }
  const newTasksLog = [...tasksLog, newArrElement]
  yield put(tab.tasksLog(newTasksLog))
  yield put(timer.countTimer(0))
  yield put(timer.taskName(''))
}

export default function * saga () {
  yield all([
    yield takeEvery('TASKS_LOG', dispatchDataForChart),
    yield takeEvery('BUTTON_TEXT', changeTypeButton),
    yield takeEvery('TIMER_CONTINUE', onClickStart),
  ])
}
