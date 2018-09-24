const endAddress = (state = '', action) => {
  switch (action.type) {
  
    case 'STORE_END_ADDRESS':
      return action.endAddress;

    case 'SIGN_OUT_USER':
      return '';

    default:
      return state;
  }
};

export default endAddress;