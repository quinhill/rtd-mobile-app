import { isLoading, hasErrored, signInUser } from '../actions';

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
      .then(userInfo => dispatch(signInUser(userInfo)))
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default signInThunk;