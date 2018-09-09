import { combineReducers } from 'redux';
import hasErrored from './hasErroredReducer';
import isLoading from './isLoadingReducer';
import schedules from './scheduleReducer';
import userSearch from './userSearchReducer';
import favorites from './favoritesReducer';


const rootReducer = combineReducers({
  userSearch,
  schedules,
  hasErrored,
  isLoading,
  favorites
});

export default rootReducer;