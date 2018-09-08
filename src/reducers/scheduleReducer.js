export const schedules = (state = [], action) => {
  switch (action.type) {
  case 'STORE_SCHEDULE_DATA':
    return action.schedule;
  default:
    return state;
  }
};

export default schedules;