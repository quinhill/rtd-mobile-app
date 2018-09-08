export const scheduleReducer = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_SCHEDULE_DATA':
    return action.schedule;
  default:
    return state;
  }
};