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

export const itineraryUrl = (props) => {
  const {
    startAddress,
    endAddress,
    user,
    timeData
  } = props;
  const url = `${base}${user.uid}/itineraries`;
  const bodyObj = {
    start_address: startAddress,
    end_address: endAddress,
    ...timeData
  };
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyObj)
  };
  return {
    url,
    options
  };
};

export const searchRecentUrl = props => {
  const {
    uid,
    bodyObj
  } = props;
  const url = `${base}${uid}/itineraries`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyObj)
  };
  return {
    url,
    options
  };
};

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

export const getRecentUrl = (uid) => (
  `${base}${uid}/itineraries?amount=5`
);