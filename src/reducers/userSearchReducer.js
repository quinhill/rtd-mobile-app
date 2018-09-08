export const userSearch = (state = {}, action) => {
  switch (action.type) {
  case 'STORE_USER_SEARCH':
    return {
      ...action.startingPoint, 
      ...action.destination 
    };
  
  default:
    return state;
  }
};

export default userSearch;