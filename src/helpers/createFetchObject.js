export const createFetchObject = (urlType, method = 'GET', bodyObj = null) => { 
  let body = bodyObj ? JSON.stringify(bodyObj) : null;
  const url = createUrl(urlType);
  return (
    {url,
      options: {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body
      }
    }
  );
};

const createUrl = (urlInfo) => {
  const {
    type,
    userId
  } = urlInfo;
  let endpoint = '';
  switch (type) {
  case 'newFavorite':
    endpoint = `${userId}/favoriteItinerary`;
  case 'newSearch':
    endpoint = `${userId}`
  }
  
 
  return `http://rtd-revamp-api.herokuapp.com/api/v1/users/${endpoint}`;
};

