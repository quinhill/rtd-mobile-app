import { isLoading, hasErrored, getFavorites } from '../actions';

const getFavoritesThunk = (url) => {
  return (dispatch) => {
    dispatch(isLoading('favorite'));
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error();
        }
        dispatch(isLoading(null));
        return response;
      })
      .then(response => response.json())
      .then(userInfo => {
        dispatch(getFavorites(userInfo));
      })
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default getFavoritesThunk; 