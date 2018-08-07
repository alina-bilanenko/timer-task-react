import { combineReducers } from 'redux';
import {
  countTimer,
  buttonText,
  taskName,
  dateStart,
  dateEnd,
  openModal,
} from './timer';

export const reducer = combineReducers({
  buttonText,
  taskName,
  openModal,
  taskTime: combineReducers({
    countTimer,
    dateStart,
    dateEnd,
  }),
});
