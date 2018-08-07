export const COUNT_TIMER = 'COUNT_TIMER';
export const BUTTON_TEXT = 'BUTTON_TEXT';
export const TASK_NAME = 'TASK_NAME';
export const DATE_START = 'DATE_START';
export const DATE_END = 'DATE_END';
export const OPEN_MODAL = 'OPEN_MODAL';

export const countTimer = value => ({
  type: COUNT_TIMER,
  count: value,
});

export const buttonText = value => ({
  type: BUTTON_TEXT,
  text: value,
});

export const taskName = name => ({
  type: TASK_NAME,
  name: name,
});

export const dataStart = date => ({
  type: DATE_START,
  date: date,
});

export const dataEnd = date => ({
  type: DATE_END,
  date: date,
});

export const openModal = bool => ({
  type: OPEN_MODAL,
  isOpen: bool,
});
