export const isLoading = (string) => ({
  type: 'IS_LOADING',
  string
});
   
export const hasErrored = (bool) => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
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

export const addFavorite = (favorite) => ({
  type: 'ADD_FAVORITE',
  favorite
});

export const getFavorites = (favorites) => ({
  type: 'GET_FAVORITES',
  favorites
});

export const deleteFavorite = (id) => ({
  type: 'DELETE_FAVORITE',
  id
});

export const setTime = time => ({
  type: 'SET_TIME',
  time
});

export const getRecent = recentSearches => ({
  type: 'GET_RECENT',
  recentSearches
});