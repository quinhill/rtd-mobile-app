import { isLoading, hasErrored, addFavorite } from '../actions';

const addFavoriteThunk = (fetchObj) => {
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
      .then(userInfo => {
        dispatch(addFavorite(userInfo));
      })
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default addFavoriteThunk;