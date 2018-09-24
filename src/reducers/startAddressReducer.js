const startAddress = (state = '', action) => {
  switch (action.type) {  
    case 'STORE_START_ADDRESS':
      return action.startAddress;

    case 'SIGN_OUT_USER':
      return '';

    default:
      return state;
  }
};

export default startAddress;