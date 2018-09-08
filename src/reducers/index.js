import { combineReducers } from 'redux';
import hasErrored from './hasErroredReducer';
import isLoading from './isLoadingReducer';
import schedules from "./scheduleReducer";

const rootReducer = combineReducers({
  schedules,
  hasErrored,
  isLoading
});

export default rootReducer;