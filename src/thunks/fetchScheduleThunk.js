import { isLoading, hasErrored, storeScheduleData } from '../actions';

export const fetchScheduleThunk = (url) => {
  return (dispatch) => {
    dispatch(isLoading(true));
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(isLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(schedule => dispatch(storeScheduleData(schedule)))
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default fetchScheduleThunk;