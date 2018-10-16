import { isLoading, hasErrored, signInUser, getFavorites, getRecent } from '../actions';

export const signInThunk = (url) => {
  return (dispatch) => {
    dispatch(isLoading('user'));
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
        dispatch(signInUser(userInfo.user))
        dispatch(getFavorites(userInfo.favorites))
        dispatch(getRecent(userInfo.recent_searches))
      })
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default signInThunk;