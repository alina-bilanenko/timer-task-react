import { dataForTaskChart } from './functions'

export const initialState = {
  timer: {
    countTimer: 0,
    buttonText: true,
    taskName: '',
    dateStart: 0,
    openModal: false,
    timerSetInterval: null
  },
  tab: {
    openTabNumber: 0,
    tasksLog: [],
    dataForChart: dataForTaskChart([])
  }
}

export const tabs = {
  tasksLog: 'tasks-log',
  tasksChart: 'tasks-chart'
}
