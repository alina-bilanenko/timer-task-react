import { dataForTaskChart, newTimer } from 'functions';
import { fieldsTasksLog } from 'constFields';
import moment from 'moment/moment';

it('Should build an array for the graph from the table', () => {
  const dataForChart = [
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
    { name: 23, pv: 60 },
  ];

  const taskLog = [
    {
      [fieldsTasksLog.taskName]: 'task 1',
      [fieldsTasksLog.dateStart]: moment('2018-08-13 15:05:17').valueOf(),
      [fieldsTasksLog.dateEnd]: moment('2018-08-14 03:50:50').valueOf(),
      [fieldsTasksLog.countTimer]: newTimer(
        moment('2018-08-13 03:50:50') - moment('2018-08-14 15:05:17'),
        'ms'
      ),
    },
    {
      [fieldsTasksLog.taskName]: 'task 2',
      [fieldsTasksLog.dateStart]: moment('2018-08-14 08:15:17').valueOf(),
      [fieldsTasksLog.dateEnd]: moment('2018-08-14 11:22:50').valueOf(),
      [fieldsTasksLog.countTimer]: newTimer(
        moment('2018-08-14 11:22:50') - moment('2018-08-14 08:15:17'),
        'ms'
      ),
    },
    {
      [fieldsTasksLog.taskName]: 'task 3',
      [fieldsTasksLog.dateStart]: moment('2018-08-14 11:35:44').valueOf(),
      [fieldsTasksLog.dateEnd]: moment('2018-08-14 11:50:00').valueOf(),
      [fieldsTasksLog.countTimer]: newTimer(
        moment('2018-08-14 11:50:00') - moment('2018-08-14 11:35:44'),
        'ms'
      ),
    },
    {
      [fieldsTasksLog.taskName]: 'task 4',
      [fieldsTasksLog.dateStart]: moment('2018-08-14 11:55:17').valueOf(),
      [fieldsTasksLog.dateEnd]: moment('2018-08-14 18:40:50').valueOf(),
      [fieldsTasksLog.countTimer]: newTimer(
        moment('2018-08-14 18:40:50') - moment('2018-08-14 11:55:17'),
        'ms'
      ),
    },
    {
      [fieldsTasksLog.taskName]: 'task 5',
      [fieldsTasksLog.dateStart]: moment('2018-08-14 20:00:17').valueOf(),
      [fieldsTasksLog.dateEnd]: moment('2018-08-15 03:50:50').valueOf(),
      [fieldsTasksLog.countTimer]: newTimer(
        moment('2018-08-14 03:50:50') - moment('2018-08-15 20:00:17'),
        'ms'
      ),
    },
  ];
  expect(dataForTaskChart(taskLog)).toEqual(dataForChart);
});
