const base = 'https://rtd-revamp-api.herokuapp.com/api/v1/users/';

export const signInUrl = (uid) => (
  `${base}${uid}`
);

export const signUpUrl = (state, authUser) => {
  return {
    url: "https://rtd-revamp-api.herokuapp.com/api/v1/users",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: state.username,
        uid: authUser.user.uid,
        email: authUser.user.email
      })
    }
  }
}

export const itineraryUrl = (uid) => (
  `${base}${uid}/itineraries`
);

export const postFavoriteUrl = (value, id) => (
  `${base}${value}/itineraries/${id}`
);

export const getFavoritesUrl = (uid) => (
  `${base}${uid}/favorites`
);

export const getFavUrl = (uid, id) => (
  `${base}${uid}/favorites/${id}`
);

export const deleteFavUrl = (uid, id) => {
  const url = `${base}${uid}/favorites/${id}`;
  return {
    url,
    options: {
      method: 'DELETE',
    }
  };
};