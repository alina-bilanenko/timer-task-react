import { initialState } from "reducers/reducer";

export const tab = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_TAB_NUMBER':
      return { ...state, openTabNumber: action.tabNumber };
    case 'TASKS_LOG':
      return { ...state, tasksLog: action.taskLog };
    case 'DATA_FOR_CHART':
      return { ...state, dataForChart: action.data };

    default:
      return state;
  }
};
