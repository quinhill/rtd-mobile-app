import { isLoading, hasErrored, signUpUser } from '../actions';
import { auth } from '../firebase';

const signUpThunk = (userInfo) => {
  const { email, passwordOne } = userInfo;
  console.log('thunk');
  return (dispatch) => {
    dispatch(isLoading(true));
    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(response => {
        if (!response.ok) {
          throw Error();
        }
        dispatch(isLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(userInfo => {
        console.log(userInfo);
        dispatch(signUpUser(userInfo));
      })
        
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default signUpThunk;