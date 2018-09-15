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

export const storeStartAddress = (startAddress) => ({
  type: 'STORE_START_ADDRESS',
  startAddress
});

export const storeEndAddress = (endAddress) => ({
  type: 'STORE_END_ADDRESS',
  endAddress
});

export const storeItinerary = (itinerary) => ({
  type: 'STORE_ITINERARY',
  itinerary
});

export const signUpUser = (userInfo) => ({
  type: 'SIGN_UP_USER',
  userInfo
});

export const signInUser = (userInfo) => ({
  type: 'SIGN_IN_USER',
  userInfo
});

export const signOutUser = () => ({
  type: 'SIGN_OUT_USER'
});