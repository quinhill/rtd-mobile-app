import Geocode from 'react-geocode';

Geocode.setApiKey("AIzaSyDTQe43-nMnt67dMUUqqmRj2-jHQyfsjUk");

export const geocode = (lat, lon) => {
  Geocode.fromLatLng(lat, lon).then(
    response => {
      const address = response.results[0].formatted_address;
      return address;
    },
    error => {
      console.error(error);
    }
  )
}