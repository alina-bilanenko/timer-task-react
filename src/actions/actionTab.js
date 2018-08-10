const tabActions = {
  OPEN_TAB_NUMBER: 'OPEN_TAB_NUMBER',
  TASKS_LOG: 'TASKS_LOG',
  DATA_FOR_CHART: 'DATA_FOR_CHART'
};

export const tab = {
  openTabNumber: value => ({
    type: tabActions.OPEN_TAB_NUMBER,
    tabNumber: value,
  }),
  tasksLog: value => ({
    type: tabActions.TASKS_LOG,
    taskLog: value,
  }),
  dataForChart: value => ({
    type: tabActions.DATA_FOR_CHART,
    data: value,
  }),
};