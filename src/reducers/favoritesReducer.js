const favorites = (state=[], action) => {
  switch (action.type) {
  case 'STORE_MOCK_FAV_DATA':
    return action.mockFavData;
  
  default:
    return state;
  }
};

export default favorites;