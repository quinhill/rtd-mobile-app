import { combineReducers } from 'redux';
import hasErrored from './hasErroredReducer';
import isLoading from './isLoadingReducer';
import schedules from "./scheduleReducer";
import userSearch from "./userSearchReducer";


const rootReducer = combineReducers({
  userSearch,
  schedules,
  hasErrored,
  isLoading
});

export default rootReducer;