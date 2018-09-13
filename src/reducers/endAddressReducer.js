const endAddress = (state = '', action) => {
  switch (action.type) {
  
  case 'STORE_END_ADDRESS':
    return action.endAddress;

  default:
    return state;
  }
};

export default endAddress;