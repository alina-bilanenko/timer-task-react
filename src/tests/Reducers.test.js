import { initialStateTimer, initialStateTab } from 'constsForTest'
import { timer } from 'reducers/timer'
import { reducer } from 'reducers/reducer'
import { tab } from 'reducers/tab'
import { initialState } from 'consts'

describe('reducer InitialState', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })
})

describe('reducer Timer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })
  it('should handle COUNT_TIMER', () => {
    const action = {
      type: 'COUNT_TIMER', count: initialStateTimer.countTimer
    }
    expect(timer(initialState.timer, action)).toEqual({ ...initialState.timer, countTimer: initialStateTimer.countTimer })
  })
  it('should handle BUTTON_TEXT', () => {
    const action = {
      type: 'BUTTON_TEXT', isStart: initialStateTimer.buttonText
    }
    expect(timer(initialState.timer, action)).toEqual({ ...initialState.timer, buttonText: initialStateTimer.buttonText })
  })
  it('should handle TASK_NAME', () => {
    const action = {
      type: 'TASK_NAME', name: initialStateTimer.taskName
    }
    expect(timer(initialState.timer, action)).toEqual({ ...initialState.timer, taskName: initialStateTimer.taskName })
  })
  it('should handle DATE_START', () => {
    const action = {
      type: 'DATE_START', date: initialStateTimer.taskName
    }
    expect(timer(initialState.timer, action)).toEqual({ ...initialState.timer, dateStart: initialStateTimer.taskName })
  })
  it('should handle OPEN_MODAL', () => {
    const action = {
      type: 'OPEN_MODAL', isOpen: initialStateTimer.openModal
    }
    expect(timer(initialState.timer, action)).toEqual({ ...initialState.timer, openModal: initialStateTimer.openModal })
  })
})

describe('reducer Tab', () => {
  it('should handle OPEN_TAB_NUMBER', () => {
    const action = {
      type: 'OPEN_TAB_NUMBER', tabNumber: initialStateTab.openTabNumber
    }
    expect(tab(initialState.tab, action)).toEqual({ ...initialState.tab, openTabNumber: initialStateTab.openTabNumber })
  })
  it('should handle TASKS_LOG', () => {
    const action = {
      type: 'TASKS_LOG', taskLog: initialStateTab.tasksLog
    }
    expect(tab(initialState.tab, action)).toEqual({ ...initialState.tab, tasksLog: initialStateTab.tasksLog })
  })
  it('should handle DATA_FOR_CHART', () => {
    const action = {
      type: 'DATA_FOR_CHART', data: initialStateTab.dataForChart
    }
    expect(tab(initialState.tab, action)).toEqual({ ...initialState.tab, dataForChart: initialStateTab.dataForChart })
  })
})
