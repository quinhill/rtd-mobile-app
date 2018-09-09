import { combineReducers } from 'redux';
import hasErrored from './hasErroredReducer';
import isLoading from './isLoadingReducer';
import schedules from "./scheduleReducer";
import userSearch from "./userSearchReducer";
import display from './displayReducer';


const rootReducer = combineReducers({
  userSearch,
  schedules,
  hasErrored,
  isLoading,
  display
});

export default rootReducer;