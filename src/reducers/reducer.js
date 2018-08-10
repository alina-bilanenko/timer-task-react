import { combineReducers } from 'redux';
import { timer } from 'reducers/timer';
import { tab } from 'reducers/tab'
import moment from "moment/moment";
import { newTimer, dataForTaskChart } from 'functions'

const nullTime = moment(0).set({ hour: 0, minute: 0, second: 0 });
const initialStateTabLog = [
  {
    taskName: "task 1",
    dateStart: moment('2018-08-08 15:05:17'),
    dateEnd: moment('2018-08-09 03:50:50'),
    countTimer: newTimer(moment('2018-08-09 03:50:50') - moment('2018-08-08 15:05:17'), 'ms')
  },
  {
    taskName: "task 2",
    dateStart: moment('2018-08-09 08:15:17'),
    dateEnd: moment('2018-08-09 11:22:50'),
    countTimer: newTimer(moment('2018-08-09 11:22:50') - moment('2018-08-09 08:15:17'), 'ms')
  },
  {
    taskName: "task 3",
    dateStart: moment('2018-08-09 11:35:44'),
    dateEnd: moment('2018-08-09 11:50:00'),
    countTimer: newTimer(moment('2018-08-09 11:50:00') - moment('2018-08-09 11:35:44'), 'ms')
  },
  {
    taskName: "task 4",
    dateStart: moment('2018-08-09 11:55:17'),
    dateEnd: moment('2018-08-09 18:40:50'),
    countTimer: newTimer(moment('2018-08-09 18:40:50') - moment('2018-08-09 11:55:17'), 'ms')
  },
  {
    taskName: "task 5",
    dateStart: moment('2018-08-09 20:00:17'),
    dateEnd: moment('2018-08-10 03:50:50'),
    countTimer: newTimer(moment('2018-08-10 03:50:50') - moment('2018-08-09 20:00:17'), 'ms')
  }
];

export const initialState = {
  countTimer: 0,
  buttonText: true,
  taskName: '',
  dateStart: nullTime,
  openModal: false,
  openTabNumber: 0,
  tasksLog: initialStateTabLog,
  dataForChart: dataForTaskChart(initialStateTabLog)
};

export const reducer = combineReducers({
  timer,
  tab
});
