export const userSearch = (state = { startAddress: '', endAddress: '' }, action) => {
  switch (action.type) {
  case 'STORE_START_ADDRESS':
    return {
      startAddress: action.startAddress
    };

  case 'STORE_END_ADDRESS':
    return {
      endAddress: action.endAddress
    };

  default:
    return state;
  }
};

export default userSearch;