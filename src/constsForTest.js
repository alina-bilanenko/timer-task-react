import moment from 'moment/moment'
import { newTimer } from './functions'
import { fieldsTasksLog } from './constFields'

export const dataForChart = [
  { name: 0, pv: 60 },
  { name: 1, pv: 60 },
  { name: 2, pv: 60 },
  { name: 3, pv: 50 },
  { name: 4, pv: 0 },
  { name: 5, pv: 0 },
  { name: 6, pv: 0 },
  { name: 7, pv: 0 },
  { name: 8, pv: 45 },
  { name: 9, pv: 60 },
  { name: 10, pv: 60 },
  { name: 11, pv: 42 },
  { name: 12, pv: 60 },
  { name: 13, pv: 60 },
  { name: 14, pv: 60 },
  { name: 15, pv: 60 },
  { name: 16, pv: 60 },
  { name: 17, pv: 60 },
  { name: 18, pv: 40 },
  { name: 19, pv: 0 },
  { name: 20, pv: 60 },
  { name: 21, pv: 60 },
  { name: 22, pv: 60 },
  { name: 23, pv: 60 }
]

const dateForTest = {

  task1: {
    dateStart: moment().subtract(1, 'days').set({ hour: 15, minute: 45, second: 25 }),
    dateEnd: moment().set({ hour: 3, minute: 50, second: 50 })
  },
  task2: {
    dateStart: moment().set({ hour: 8, minute: 15, second: 17 }),
    dateEnd: moment().set({ hour: 11, minute: 22, second: 50 })
  },
  task3: {
    dateStart:  moment().set({ hour: 11, minute: 35, second: 44 }),
    dateEnd: moment().set({ hour: 11, minute: 50, second: 0 })
  },
  task4: {
    dateStart:  moment().set({ hour: 11, minute: 55, second: 17 }),
    dateEnd: moment().set({ hour: 18, minute: 40, second: 50 })
  },
  task5: {
    dateStart:  moment().set({ hour: 20, minute: 0, second: 17 }),
    dateEnd: moment().add(1, 'days').set({ hour: 3, minute: 50, second: 50 })
  }
}

export const taskLog = [
  {
    [fieldsTasksLog.taskName]: 'task 1',
    [fieldsTasksLog.dateStart]: dateForTest.task1.dateStart.valueOf(),
    [fieldsTasksLog.dateEnd]: dateForTest.task1.dateEnd.valueOf(),
    [fieldsTasksLog.countTimer]: newTimer(
      dateForTest.task1.dateStart - dateForTest.task1.dateEnd,
      'ms'
    )
  },
  {
    [fieldsTasksLog.taskName]: 'task 2',
    [fieldsTasksLog.dateStart]: dateForTest.task2.dateStart.valueOf(),
    [fieldsTasksLog.dateEnd]: dateForTest.task2.dateEnd.valueOf(),
    [fieldsTasksLog.countTimer]: newTimer(
      dateForTest.task2.dateStart - dateForTest.task2.dateEnd,
      'ms'
    )
  },
  {
    [fieldsTasksLog.taskName]: 'task 3',
    [fieldsTasksLog.dateStart]: dateForTest.task3.dateStart.valueOf(),
    [fieldsTasksLog.dateEnd]: dateForTest.task3.dateEnd.valueOf(),
    [fieldsTasksLog.countTimer]: newTimer(
      dateForTest.task3.dateStart - dateForTest.task3.dateEnd,
      'ms'
    )
  },
  {
    [fieldsTasksLog.taskName]: 'task 4',
    [fieldsTasksLog.dateStart]: dateForTest.task4.dateStart.valueOf(),
    [fieldsTasksLog.dateEnd]: dateForTest.task4.dateEnd.valueOf(),
    [fieldsTasksLog.countTimer]: newTimer(
      dateForTest.task4.dateStart - dateForTest.task4.dateEnd
    )
  },
  {
    [fieldsTasksLog.taskName]: 'task 5',
    [fieldsTasksLog.dateStart]: dateForTest.task5.dateStart.valueOf(),
    [fieldsTasksLog.dateEnd]: dateForTest.task5.dateEnd.valueOf(),
    [fieldsTasksLog.countTimer]: newTimer(
      dateForTest.task5.dateStart - dateForTest.task5.dateEnd,
      'ms'
    )
  }
]

export const initialStateTimer = {
  countTimer: 78,
  buttonText: false,
  taskName: 'task 1',
  dateStart: moment().valueOf(),
  openModal: true
}

export const initialStateTab = {
  tab: {
    openTabNumber: 1,
    tasksLog: taskLog,
    dataForChart: dataForChart
  }
}
