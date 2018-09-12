const userInfo = (state=[], action) => {
  switch (action.type) {
  case 'SIGN_UP_USER':
    return action.userInfo;
  
  default:
    return state;
  }
};

export default userInfo;