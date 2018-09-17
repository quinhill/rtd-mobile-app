export const infoCleaner = (steps) => {
  const totalSteps = steps.reduce((sumTotal, step) => {
    if (step.travel_mode !== 'Walking') {
      sumTotal.eachStep = [];
      const durTotal = parseInt(step.duration.split(' ')[0]);
      sumTotal.eachStep.push(durTotal);
      if (!sumTotal.stepsSum) {
        sumTotal.stepsSum = 1;
      } else {
        sumTotal.stepsSum++;
      }
      if (!sumTotal.duration) {
        sumTotal.duration = durTotal;
      } else {
        sumTotal.duration += durTotal;
      }
    }
    return sumTotal;
  }, {});
  console.log(totalSteps);
  const firstVehicle = steps.find(step => (
    step.travel_mode !== 'Walking'));
  const vehicle_type = firstVehicle.vehicle_type.toLowerCase();
  const {
    color,
    headsign,
    departure_stop,
    departure_time,
    short_name
  } = firstVehicle;
  return {
    color,
    headsign,
    vehicle_type,
    departure_stop,
    departure_time,
    short_name,
    totalSteps
  };
};

export const cleanStep = (step) => {

  const imgUrl = step.vehicle_type 
    ? `${step.vehicle_type.toLowerCase()}.png`
    : `${step.travel_mode.toLowerCase()}.png`;
  const {
    arrival_stop,
    arrival_time,
    color,
    departure_stop,
    departure_time,
    duration,
    headsign,
    instructions,
    num_stops,
    short_name
  } = step;
  return {
    imgUrl,
    arrival_stop,
    arrival_time,
    color,
    departure_stop,
    departure_time,
    duration,
    headsign,
    instructions,
    num_stops,
    short_name
  };
};