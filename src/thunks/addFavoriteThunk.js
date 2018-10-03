import { isLoading, hasErrored, addFavorite,  } from '../actions';
import getFavoritesThunk from './getFavoritesThunk';
import { getFavoritesUrl } from '../constants/urlGenerator';

export const addFavoriteThunk = (fetchObj) => {
  const {
    url,
    options,
    uid
  } = fetchObj;
  const url2 = getFavoritesUrl(uid);
  return (dispatch) => {
    dispatch(isLoading('favorite'));
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw Error();
        }
        dispatch(isLoading(''));
        return response;
      })
      .then(response => response.json())
      .then(favorite => {
        dispatch(addFavorite(favorite));
      })
      .then(() => getFavoritesThunk(url2))
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default addFavoriteThunk;