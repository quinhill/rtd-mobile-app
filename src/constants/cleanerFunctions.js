export const infoCleaner = (steps) => {
  const firstVehicle = steps.find(step => step.travel_mode !== 'Walking');
  const vehicle_type = firstVehicle.vehicle_type.toLowerCase();
  const {
    headsign,
    departure_stop,
    departure_time,
    short_name
  } = firstVehicle;
  return {
    headsign,
    vehicle_type,
    departure_stop,
    departure_time,
    short_name
  };
};

export const cleanStep = (step) => {

  const imgUrl = step.vehicle_type 
    ? `${step.vehicle_type.toLowerCase()}.png`
    : `${step.travel_mode.toLowerCase()}.png`;
  const {
    arrival_stop,
    arrival_time,
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
    departure_stop,
    departure_time,
    duration,
    headsign,
    instructions,
    num_stops,
    short_name
  };
};