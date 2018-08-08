import moment from 'moment';

const nullTime = moment(0).set({ hour: 0, minute: 0, second: 0 });

const initialState = {
  countTimer: 0,
  buttonText: true,
  taskName: '',
  dateStart: nullTime,
  dateEnd: nullTime,
  openModal: false,
};

export const timer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNT_TIMER':
      return { ...state, countTimer: action.count };
    case 'BUTTON_TEXT':
      return { ...state, buttonText: action.isStart };
    case 'TASK_NAME':
      return { ...state, taskName: action.name };
    case 'DATE_START':
      return { ...state, dateStart: action.date };
    case 'DATE_END':
      return { ...state, dateEnd: action.date };
    case 'OPEN_MODAL':
      return { ...state, openModal: action.isOpen };

    default:
      return state;
  }
};
