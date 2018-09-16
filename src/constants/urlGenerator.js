const base = 'http://rtd-revamp-api.herokuapp.com/api/v1/users/';

export const signInUrl = (uid) => {
  return `${base}${uid}`;
};

export const itineraryUrl = (uid) => (
  `${base}${uid}/itineraries`
);