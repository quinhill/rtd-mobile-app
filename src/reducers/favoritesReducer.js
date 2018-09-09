const favorites = (state=[], action) => {
  switch (action.type) {
  case 'STORE_MOCK_FAV_ROUTES':
    return action.mockFavRoutes;
  
  default:
    return state;
  }
};

export default favorites;