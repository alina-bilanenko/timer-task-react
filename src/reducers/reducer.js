import { combineReducers } from 'redux';
import { timer } from 'reducers/timer';
import { tab } from 'reducers/tab';
import moment from 'moment/moment';
import { newTimer, dataForTaskChart, fieldsTasksLog } from 'functions';

const initialStateTabLog = [
  {
    [fieldsTasksLog.taskName]: 'task 1',
    [fieldsTasksLog.dateStart]: moment('2018-08-09 15:05:17').valueOf(),
    [fieldsTasksLog.dateEnd]: moment('2018-08-10 03:50:50').valueOf(),
    [fieldsTasksLog.countTimer]: newTimer(
      moment('2018-08-10 03:50:50') - moment('2018-08-09 15:05:17'),
      'ms'
    ),
  },
  {
    [fieldsTasksLog.taskName]: 'task 2',
    [fieldsTasksLog.dateStart]: moment('2018-08-10 08:15:17').valueOf(),
    [fieldsTasksLog.dateEnd]: moment('2018-08-10 11:22:50').valueOf(),
    [fieldsTasksLog.countTimer]: newTimer(
      moment('2018-08-10 11:22:50') - moment('2018-08-10 08:15:17'),
      'ms'
    ),
  },
  {
    [fieldsTasksLog.taskName]: 'task 3',
    [fieldsTasksLog.dateStart]: moment('2018-08-10 11:35:44').valueOf(),
    [fieldsTasksLog.dateEnd]: moment('2018-08-10 11:50:00').valueOf(),
    [fieldsTasksLog.countTimer]: newTimer(
      moment('2018-08-10 11:50:00') - moment('2018-08-10 11:35:44'),
      'ms'
    ),
  },
  {
    [fieldsTasksLog.taskName]: 'task 4',
    [fieldsTasksLog.dateStart]: moment('2018-08-10 11:55:17').valueOf(),
    [fieldsTasksLog.dateEnd]: moment('2018-08-10 18:40:50').valueOf(),
    [fieldsTasksLog.countTimer]: newTimer(
      moment('2018-08-10 18:40:50') - moment('2018-08-10 11:55:17'),
      'ms'
    ),
  },
  {
    [fieldsTasksLog.taskName]: 'task 5',
    [fieldsTasksLog.dateStart]: moment('2018-08-10 20:00:17').valueOf(),
    [fieldsTasksLog.dateEnd]: moment('2018-08-11 03:50:50').valueOf(),
    [fieldsTasksLog.countTimer]: newTimer(
      moment('2018-08-11 03:50:50') - moment('2018-08-10 20:00:17'),
      'ms'
    ),
  },
];

export const initialState = {
  timer: {
    countTimer: 0,
    buttonText: true,
    taskName: '',
    dateStart: 0,
    openModal: false,
  },
  tab: {
    openTabNumber: 0,
    tasksLog: initialStateTabLog,
    dataForChart: dataForTaskChart(initialStateTabLog),
  },
};

export const reducer = combineReducers({
  timer,
  tab,
});
