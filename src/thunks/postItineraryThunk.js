import { isLoading, hasErrored, storeItinerary } from '../actions';

const postItineraryThunk = (fetchObj) => {
  const {
    url,
    options
  } = fetchObj;
  return (dispatch) => {
    dispatch(isLoading('itinerary'));
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw Error();
        }
        dispatch(isLoading(null));
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
