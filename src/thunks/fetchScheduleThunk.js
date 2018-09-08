import { isLoading, hasErrored, putScheduleData } from '../actions';

export const fetchSchedule = (url) => {
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
      .then(schedule => dispatch(putScheduleData(schedule)))
      .catch(() => dispatch(hasErrored(true)));
  };
};