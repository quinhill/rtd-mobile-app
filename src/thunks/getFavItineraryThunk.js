import { isLoading, hasErrored, storeItinerary } from '../actions';
 
export const getFavItineraryThunk = (url) => {
  return (dispatch) => {
    dispatch(isLoading('itinerary'));
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error();
        }
        dispatch(isLoading(''));
        return response;
      })
      .then(response => response.json())
      .then(itinerary => {
        dispatch(storeItinerary(itinerary));
      })
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default getFavItineraryThunk;