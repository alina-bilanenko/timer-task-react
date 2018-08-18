const timerActions = {
  COUNT_TIMER: 'COUNT_TIMER',
  BUTTON_TEXT: 'BUTTON_TEXT',
  TASK_NAME: 'TASK_NAME',
  DATE_START: 'DATE_START',
  OPEN_MODAL: 'OPEN_MODAL'
}

export const timer = {
  countTimer: value => ({
    type: timerActions.COUNT_TIMER,
    count: value
  }),
  buttonText: value => ({
    type: timerActions.BUTTON_TEXT,
    isStart: value
  }),
  taskName: value => ({
    type: timerActions.TASK_NAME,
    name: value
  }),
  dateStart: value => ({
    type: timerActions.DATE_START,
    date: value
  }),
  openModal: value => ({
    type: timerActions.OPEN_MODAL,
    isOpen: value
  })
}
