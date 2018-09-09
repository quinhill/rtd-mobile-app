export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
});
   
export const hasErrored = (bool) => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
});

export const storeScheduleData = (schedule) => ({
  type: 'STORE_SCHEDULE_DATA',
  schedule
});

export const storeUserSearch = (startingPoint, destination) => ({
  type: 'STORE_USER_SEARCH',
  startingPoint,
  destination
});

export const displaySelected = (selected) => ({
  type: 'DISPLAY_SELECTED',
  selected
});