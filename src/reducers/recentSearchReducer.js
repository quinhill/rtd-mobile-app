const recentSearches = (state = [], action) => {
  switch (action.type) {
  case 'GET_RECENT':
    return [ ...action.recentSearches];

  default:
    return state;
  }
}