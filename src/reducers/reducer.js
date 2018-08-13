import { combineReducers } from 'redux';
import { timer } from 'reducers/timer';
import { tab } from 'reducers/tab';

export const reducer = combineReducers({
  timer,
  tab
});
