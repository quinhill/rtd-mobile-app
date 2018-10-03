import { isLoading, hasErrored, signUpUser } from "../actions";

export const signUpThunk = fetchObj => {
  const { url, options } = fetchObj;
  return dispatch => {
    dispatch(isLoading('user'));
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw Error();
        }
        dispatch(isLoading(''));
        return response;
      })
      .then(response => response.json())
      .then(userInfo => {
        dispatch(signUpUser(userInfo));
      })
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default signUpThunk;
