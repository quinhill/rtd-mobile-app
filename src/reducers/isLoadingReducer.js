export const isLoading = (state = '', action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.string;
      
    default:
      return state;
  }
};

export default isLoading;