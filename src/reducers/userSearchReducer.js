export const userSearch = (state = '', action) => {
  switch (action.type) {
  case 'STORE_START_SEARCH':
    return action.startAddress;

  case 'STORE_END_SEARCH':
    return action.endAddress;
  
  default:
    return state;
  }
};

export default userSearch;