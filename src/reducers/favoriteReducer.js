const favorites = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...state, action.favorite];

  case 'GET_FAVORITES':
    return action.favorites;
  
  default:
    return state;
  }
};

export default favorites;