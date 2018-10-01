import { isLoading, hasErrored, storeItinerary } from '../actions';

const postItineraryThunk = (fetchObj) => {
  const {
    url,
    options
  } = fetchObj;
  console.log(options)
  return (dispatch) => {
    dispatch(isLoading(true));
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw Error();
        }
        dispatch(isLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(itinerary => {
        dispatch(storeItinerary(itinerary));
      })
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default postItineraryThunk;
