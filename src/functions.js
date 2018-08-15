import moment from 'moment/moment';
import { fieldsTasksLog } from 'constFields';

export const newTimer = (timer, type = 's') => {
  return moment(0)
    .set({ hour: 0, minute: 0, second: 0 })
    .add(timer, type)
    .format('HH:mm:ss');
};

export const sortTasksLog = (a, b) => {
  if (
    moment(a[fieldsTasksLog.dateStart]).isBefore(
      moment(b[fieldsTasksLog.dateStart])
    )
  )
    return -1;
  if (
    moment(b[fieldsTasksLog.dateStart]).isBefore(
      moment(a[fieldsTasksLog.dateStart])
    )
  )
    return 1;
  return 0;
};

export const dataForTaskChart = tasksLog => {
  const data = [];
  const dayOfToday = moment();

  for (let i = 0; i < 24; i++) {
    data.push({ name: i, pv: 0 });
  }

  const tasksLogWithSorting = [...tasksLog].sort(sortTasksLog);

  tasksLogWithSorting.forEach(item => {
    const isDataStartToday = moment(item[fieldsTasksLog.dateStart]).isSame(
      dayOfToday,
      'day'
    );
    const isDataEndToday = moment(item[fieldsTasksLog.dateEnd]).isSame(
      dayOfToday,
      'day'
    );

    if (!isDataStartToday && !isDataEndToday) return;
    const dateStart = moment(item[fieldsTasksLog.dateStart]);
    const dateEnd = moment(item[fieldsTasksLog.dateEnd]);
    const roundDateStart = isDataStartToday
      ? dateStart
      : dayOfToday.startOf('day');
    const roundDateEnd = isDataEndToday ? dateEnd : dayOfToday.endOf('day');
    const hourDateStart = roundDateStart.get('hour');
    const hourDateEnd = roundDateEnd.get('hour');
    const minutesDateStart = roundDateStart.get('minute');
    const minutesDateEnd = isDataEndToday ? roundDateEnd.get('minute') : 60;

    for (let i = hourDateStart; i <= hourDateEnd; i++) {
      if (hourDateEnd === hourDateStart) {
        data[i].pv = data[i].pv + (minutesDateEnd - minutesDateStart);
      } else if (i === hourDateStart) {
        data[i].pv = data[i].pv + (60 - minutesDateStart);
      } else if (i === hourDateEnd) {
        data[i].pv = data[i].pv + minutesDateEnd;
      } else {
        data[i].pv = data[i].pv + 60;
      }
    }
  });
  return data;
};

export const countTransformPersist = ({
                                        countTimer,
                                        buttonText,
                                        dateStart,
                                      }) => {
  if (!buttonText) {
    return moment.duration(moment() - moment(dateStart)).asSeconds();
  } else return countTimer;
};

export const dateFormat = date => moment(date).format('DD-MM-YYYY HH:mm:ss');

export const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

export const generate = () => {
  const limit = 480;
  const tasksCount = getRandom(10, 16);
  const result = generateTimeTask(limit, tasksCount);
  let tasksLog = [];
  let dateStart = moment()
    .set({ hour: 9, minute: 0, second: 0 })
    .valueOf();
  let remainBreakTime =
    (limit - result.reduce((prev, cur) => prev + cur, 0)) * 60000;
  result.forEach((el, i) => {
    const breakTime = getRandom(0, remainBreakTime);
    remainBreakTime = remainBreakTime - breakTime;
    tasksLog.push({
      [fieldsTasksLog.taskName]: `task ${i + 1}`,
      [fieldsTasksLog.dateStart]: dateStart,
      [fieldsTasksLog.dateEnd]: dateStart + el * 60000,
      [fieldsTasksLog.countTimer]: newTimer(el, 'm'),
    });
    dateStart = dateStart + el * 60000 + breakTime;
  });
  return tasksLog;
};

function generateTimeTask(limit, tasksCount) {
  const result = [];
  let coef = null;

  for (let i = 0; i < tasksCount; i++) {
    result.push(generateTaskDuration(coef));
    const currentSum = result.reduce((prev, cur) => prev + cur, 0);
    const remainLimit = limit - currentSum;
    const remainTasks = tasksCount - result.length;
    coef = remainLimit / remainTasks;
  }

  return result;
}

function generateTaskDuration(newCoef) {
  let coef = 91;

  if (newCoef != null && newCoef >= 0 && newCoef <= 91) {
    coef = newCoef;
  }

  return getRandom(10, coef);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getStateFromLocalStorage(state) {
  const newState = JSON.parse(state);
  return {
    ...newState,
    timer: {
      ...newState.timer,
      countTimer: countTransformPersist(newState.timer),
    },
    tab: {
      ...newState.tab,
      dataForChart: dataForTaskChart(newState.tab.tasksLog),
    },
    router: {
      ...newState.router,
      location: {
        ...newState.router.location,
        pathname: window.location.pathname
      }
    }
  };
}

