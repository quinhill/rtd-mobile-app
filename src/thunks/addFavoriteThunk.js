import { isLoading, hasErrored, addFavorite,  } from '../actions';

export const addFavoriteThunk = (fetchObj) => {
  const {
    url,
    options,
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
      .then(favorite => dispatch(addFavorite(favorite)))
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default addFavoriteThunk;