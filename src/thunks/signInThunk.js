import { isLoading, hasErrored, signInUser } from '../actions';

export const signInThunk = (url) => {
  return (dispatch) => {
    dispatch(isLoading(true));
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error();
        }
        dispatch(isLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(userInfo => {
        dispatch(signInUser(userInfo));
      })
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default signInThunk;