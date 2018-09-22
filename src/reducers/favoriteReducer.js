export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, ...action.favorite];

    case 'GET_FAVORITES':
      return action.favorites;

    case 'SIGN_OUT_USER':
      return [];
  
    default:
      return state;
  }
};

export default favorites;