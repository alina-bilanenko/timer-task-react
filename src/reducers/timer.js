import moment from 'moment/moment';

export const countTimer = (state = 0, action) => {
  switch (action.type) {
    case 'COUNT_TIMER':
      return action.count;

    default:
      return state;
  }
};

export const buttonText = (state = 'START', action) => {
  switch (action.type) {
    case 'BUTTON_TEXT':
      return state === 'START' ? 'STOP' : 'START';

    default:
      return state;
  }
};

export const taskName = (state = '', action) => {
  switch (action.type) {
    case 'TASK_NAME':
      return action.name;

    default:
      return state;
  }
};

export const dateStart = (
  state = moment(0).set({ hour: 0, minute: 0, second: 0 }),
  action
) => {
  switch (action.type) {
    case 'DATE_START':
      return action.date;

    default:
      return state;
  }
};

export const dateEnd = (
  state = moment(0).set({ hour: 0, minute: 0, second: 0 }),
  action
) => {
  switch (action.type) {
    case 'DATE_END':
      return action.date;

    default:
      return state;
  }
};

export const openModal = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return action.isOpen;

    default:
      return state;
  }
};
