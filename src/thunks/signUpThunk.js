import { isLoading, hasErrored, signUpUser } from '../actions';

const signUpThunk = (fetchObj) => {
  console.log('click');
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
        dispatch(signUpUser(userInfo));
      })
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default signUpThunk;