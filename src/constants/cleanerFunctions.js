export const infoCleaner = steps => {
  const totalSteps = steps.reduce((sumTotal, step) => {
    if (step.travel_mode !== "Walking") {
      let durTotal = parseInt(step.duration.split(" ")[0]);
      if (!sumTotal.stepsSum && !sumTotal.eachStep) {
        sumTotal.stepsSum = 1;
      } else {
        sumTotal.stepsSum++;
      }
      if (!sumTotal.duration) {
        sumTotal.duration = durTotal;
      } else {
        sumTotal.duration += durTotal;
      }
      if (!sumTotal.eachStep) {
        sumTotal.eachStep = [durTotal];
      } else {
        sumTotal.eachStep.push(durTotal);
      }
    }
    return sumTotal;
  }, {});
  const firstVehicle = steps.find(step => step.travel_mode !== "Walking");
  const imgUrl = `${firstVehicle.vehicle_type.split(" ")[0].toLowerCase()}.png`;
  const {
    color,
    headsign,
    departure_stop,
    departure_time,
    short_name
  } = firstVehicle;
  const line = short_name === 'MALLRIDE'
    ? 'MR'
    : short_name;
  return {
    imgUrl,
    color,
    headsign,
    departure_stop,
    departure_time,
    line,
    totalSteps
  };
};

export const cleanStep = step => {
  const imgUrl = step.vehicle_type
    ? `${step.vehicle_type.split(" ")[0].toLowerCase()}.png`
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
  const line = short_name === 'MALLRIDE'
    ? 'MR'
    : short_name;
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
    line
  };
};

export const timeCleaner = (hours, minutes, am) => {
  const hourValue = am 
    ? hours 
    : parseInt(hours) + 12;
  const minuteValue = minutes.length < 2
    ? 0 + minutes
    : minutes
  return `${hourValue}: ${minutes}`;
};
