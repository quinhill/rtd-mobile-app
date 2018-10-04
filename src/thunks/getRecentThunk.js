import { isLoading, hasErrored, getRecent } from '../actions';

const getRecentThunk = (url) => {
  return (dispatch) => {
    dispatch(isLoading('recent'));
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error();
        }
        dispatch(isLoading(null));
        return response;
      })
      .then(response => response.json())
      .then(recentSearches => dispatch(getRecent(recentSearches)))
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default getRecentThunk;