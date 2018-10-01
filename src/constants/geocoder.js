export const geocode = async (lat, long) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyDTQe43-nMnt67dMUUqqmRj2-jHQyfsjUk`;
  const response = await fetch(url);
  const address = await response.json();
  console.log(address)
  return address.results[0].formatted_address;
}