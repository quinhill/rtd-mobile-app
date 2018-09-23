import { 
  isLoading, 
  hasErrored, 
  deleteFavorite 
} from '../actions';

const deleteFavItineraryThunk = (fetchObj) => {
  const {
    url,
    options
  } = fetchObj;
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
      .then(favorite => {
        dispatch(deleteFavorite(favorite));
      })
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default deleteFavItineraryThunk;
