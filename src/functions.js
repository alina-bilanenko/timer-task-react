import moment from "moment/moment";

export const newTimer = (timer, type = 's') => {
  return moment(0)
    .set({ hour: 0, minute: 0, second: 0 })
    .add((timer), type)
    .format('HH:mm:ss');
};

export const sortTasksLog = (a,b) => {
  if (a.dateStart.isBefore(b.dateStart))
    return -1;
  if (b.dateStart.isBefore(a.dateStart))
    return 1;
  return 0;
};

export const dataForTaskChart = (tasksLog) => {
  const data = [];
  const dayOfToday = moment();

  for (let i = 0; i < 24; i++) {
    data.push({name: i, pv: 0})
  }

  const tasksLogWithSorting = tasksLog.sort(sortTasksLog);

  tasksLogWithSorting.forEach((item) => {
    const isDataStartToday = item.dateStart.isSame(dayOfToday, 'day');
    const isDataEndToday = item.dateEnd.isSame(dayOfToday, 'day');

    if(!isDataStartToday && !isDataEndToday) return;
    const dateStart = item.dateStart.clone();
    const dateEnd = item.dateEnd.clone();
    const roundDateStart = isDataStartToday ? dateStart : dayOfToday.startOf('day');
    const roundDateEnd = isDataEndToday ? dateEnd : dayOfToday.endOf('day');
    const hourDateStart = roundDateStart.get('hour');
    const hourDateEnd = roundDateEnd.get('hour');
    const minutesDateStart = roundDateStart.get('minute');
    const minutesDateEnd = isDataEndToday ? roundDateEnd.get('minute') : 60;

    for(let i = hourDateStart; i <= hourDateEnd; i++) {
      if(hourDateEnd === hourDateStart) {
        data[i].pv = data[i].pv + (minutesDateEnd - minutesDateStart)
      } else
      if (i === hourDateStart) {
        data[i].pv = data[i].pv + (60 - minutesDateStart);
      } else
      if (i === hourDateEnd) {
        data[i].pv = data[i].pv + minutesDateEnd;
      } else {
        data[i].pv = data[i].pv + 60;
      }
    }
  });
  return data;
};