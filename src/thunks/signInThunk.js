import { isLoading, hasErrored, signInUser } from '../actions';
import getFavoritesThunk from './getFavoritesThunk';

export const signInThunk = (url) => {
  const {
    userUrl,
    favoritesUrl
  } = url;
  return (dispatch) => {
    dispatch(isLoading(true));
    fetch(userUrl)
      .then(response => {
        if (!response.ok) {
          throw Error();
        }
        dispatch(isLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(userInfo => dispatch(signInUser(userInfo)))
      .then(() => getFavoritesThunk(favoritesUrl))
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default signInThunk;