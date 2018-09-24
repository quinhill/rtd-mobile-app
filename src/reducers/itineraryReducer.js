const itinerary = (state = [], action) => {
  switch (action.type) {
    case 'STORE_ITINERARY':
      return action.itinerary;

    case 'SIGN_OUT_USER':
      return [];

    default:
      return state;
  }
};

export default itinerary;