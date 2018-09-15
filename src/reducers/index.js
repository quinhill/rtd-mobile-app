import { combineReducers } from 'redux';
import hasErrored from './hasErroredReducer';
import isLoading from './isLoadingReducer';
import schedules from './scheduleReducer';
import userInfo from './userInfoReducer';
import favorites from './favoritesReducer';
import startAddress from './startAddressReducer';
import endAddress from './endAddressReducer';
import itinerary from './itineraryReducer';


const rootReducer = combineReducers({
  startAddress,
  endAddress,
  schedules,
  hasErrored,
  isLoading,
  favorites,
  userInfo,
  itinerary
});

export default rootReducer;