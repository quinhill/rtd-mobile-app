const startAddress = (state = '', action) => {
  switch (action.type) {
  
  case 'STORE_START_ADDRESS':
    return action.startAddress;

  default:
    return state;
  }
};

export default startAddress;