export const timer = (state = {}, action) => {
  switch (action.type) {
    case 'COUNT_TIMER':
      return { ...state, countTimer:action.count }
    case 'BUTTON_TEXT':
      return { ...state, buttonText: !state.buttonText }
    case 'TASK_NAME':
      return { ...state, taskName: action.name }
    case 'DATE_START':
      return { ...state, dateStart: action.date }
    case 'OPEN_MODAL':
      return { ...state, openModal: action.isOpen }
    case 'TIMER_CONTINUE':
      return { ...state, timerContinue: !state.timerContinue }

    default:
      return state
  }
}
