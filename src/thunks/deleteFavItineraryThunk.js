import { 
  isLoading, 
  hasErrored, 
  deleteFavorite 
} from '../actions';

export const deleteFavItineraryThunk = (fetchObj) => {
  const {
    url,
    options
  } = fetchObj;
  return (dispatch) => {
    dispatch(isLoading('favorite'));
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw Error();
        }
        dispatch(isLoading(null));
        return response;
      })
      .then(response => response.json())
      .then(id => {
        dispatch(deleteFavorite(id));
      })
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default deleteFavItineraryThunk;
