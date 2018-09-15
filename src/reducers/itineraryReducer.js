const itinerary = (state = [], action) => {
  switch (action.type) {
  case 'STORE_ITINERARY':
    return [...state, action.itinerary];

  default:
    return state;
  }
};

export default itinerary;