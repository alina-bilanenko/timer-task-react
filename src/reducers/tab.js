export const openTabNumber = (state = 0, action) => {
  switch (action.type) {
    case 'OPEN_TAB_NUMBER':
      return action.tabNumber;

    default:
      return state;
  }
};
