import endAddress from '../endAddressReducer';
import hasErrored from '../hasErroredReducer';
import isLoading from '../isLoadingReducer';
import itinerary from '../itineraryReducer';
import startAddress from '../startAddressReducer';
import favorites from '../favoriteReducer';
import user from '../userReducer';

describe('Reducers', () => {
  describe('endAddressReducer', () => {
    it('should return the initial state', () => {
      const expected = '';
      const result = endAddress(undefined, '');

      expect(result).toEqual(expected);
    });

    it('should return state with a new endAddress', () => {
      const expected = 'Union Station';
      const result = endAddress(undefined, {
        type: 'STORE_END_ADDRESS',
        endAddress: 'Union Station'
      });

      expect(expected).toEqual(result);
    });

    it('should reset the state to empty when the user signs out', () => {
      const expected = '';
      const result = endAddress(
        {startAddress: 'union station'}, 
        {type: 'SIGN_OUT_USER'}
      );

      expect(result).toEqual(expected);
    })
  });

  describe('startAddressReducer', () => {
    it('should return the initial state as a default', () => {
      const expected = '';
      const result = startAddress(undefined, '');

      expect(result).toEqual(expected);
    });

    it('should return state with a new startAddress', () => {
      const expected = 'Union Station';
      const result = startAddress(undefined, {
        type: 'STORE_START_ADDRESS',
        startAddress: 'Union Station'
      });

      expect(expected).toEqual(result);
    });

    it('should reset the state to empty when the user signs out', () => {
      const expected = '';
      const result = startAddress(
        {startAddress: 'union station'}, 
        {type: 'SIGN_OUT_USER'}
      );

      expect(result).toEqual(expected);
    })
  });

  describe('hasErroredReducer', () => {
    it('should return the default state if nothing is passed in', () => {
      const expected = false;
      const result = hasErrored(undefined, '');

      expect(result).toEqual(expected);
    });

    it('should return state with a boolean', () => {
      const expected = true;
      const result = hasErrored(undefined, {
        type: 'HAS_ERRORED',
        hasErrored: true
      });

      expect(expected).toEqual(result);
    });
  });

  describe('isLoadingReducer', () => {
    it('should return the default state if nothing is passed in', () => {
      const expected = '';
      const result = isLoading(undefined, '');

      expect(result).toEqual(expected);
    });

    it('should return state with a boolean', () => {
      const expected = 'itinerary';
      const result = isLoading(undefined, {
        type: 'IS_LOADING',
        string: 'itinerary'
      });

      expect(result).toEqual(expected);
    });
  });

  describe('itineraryReducer', () => {
    it('should return the default state if nothing is passed in', () => {
      const expected = [];
      const result = itinerary(undefined, '');

      expect(result).toEqual(expected);
    });

    it('should return state with an itinerary object', () => {
      const expected = {
        endAddress: 'Union Station',
        startAddress: '16th and California'
      };
      const result = itinerary(undefined, {
        type: 'STORE_ITINERARY',
        itinerary: {
          endAddress: 'Union Station',
          startAddress: '16th and California'
        }
      });

      expect(expected).toEqual(result);
    });

    describe('SIGN_OUT_USER', () => {
      it('should return update state with an empty array when a user signs out', () => {
        const expected = [];
        const result = itinerary(undefined, {
          type: 'SIGN_OUT_USER'
        })

        expect(result).toEqual(expected);
      })
      
    })
    
  });

  describe('userReducer', () => {
    it('should return the default state if nothing is passed in', () => {
      const expected = {};
      const result = user(undefined, '');

      expect(result).toEqual(expected);
    });

    it('should return state with a user object if the type is SIGN_UP_USER', () => {
      const expected = {
        id: '3',
        uid: '58eiuha902icueoeHA',
        username: 'Cool Mr. Cool',
        email: 'mr.cool@cool.com'
      };
      const result = user(undefined, {
        type: 'SIGN_UP_USER',
        userInfo: {
          id: '3',
          uid: '58eiuha902icueoeHA',
          username: 'Cool Mr. Cool',
          email: 'mr.cool@cool.com'
        }
      });

      expect(expected).toEqual(result);
    });

    it('should return state with a user object if the type is SIGN_IN_USER', () => {
      const expected = {
        id: '3',
        uid: '58eiuha902icueoeHA',
        username: 'Cool Mr. Cool',
        email: 'mr.cool@cool.com'
      };
      const result = user(undefined, {
        type: 'SIGN_IN_USER',
        userInfo: {
          id: '3',
          uid: '58eiuha902icueoeHA',
          username: 'Cool Mr. Cool',
          email: 'mr.cool@cool.com'
        }
      });

      expect(expected).toEqual(result);
    });

    it('should return state with an empty user object if the type is SIGN_OUT_USER', () => {
      const expected = {};
      const result = user(undefined, {
        type: 'SIGN_OUT_USER',
        userInfo: {}
      });

      expect(expected).toEqual(result);
    });
  });

  describe('favoriteReducer', () => {
    it('should return a defalut state of an empty array if no action type is met', () => {
      const expected = [];
      const result = favorites(undefined, '')
    })
    
    describe('ADD_FAVORITE', () => {    
      it('should return an array of favorites if the type is ADD_FAVORITE', () => {
        const expected =[{
          arrival_time: "6:33am",
          departure_time: "5:51am",
          distance: "8.1 mi",
          duration: "42 mins",
          end_address: "Columbine St, Denver, CO, USA",
          favorite: false,
          itinerary_id: 59,
          start_address: "S Monaco Pkwy, Colorado, USA",
          steps: [{
            arrival_stop: "Monaco Pkwy & 29th Ave",
            arrival_time: "6:07am",
            color: "#0277bd",
            credit_name: "Regional Transportation District",
            credit_url: "http://rtd-denver.com/",
            departure_stop: "S Monaco Pkwy & Evans Ave",
            departure_time: "5:51am",
            distance: "5.5 mi",
            duration: "16 mins",
            headsign: "Central Park 65 via Monaco",
            id: 656,
            instructions: "Bus towards Central Park 65 via Monaco",
            name: "Monaco Parkway",
            num_stops: 24,
            possible_route_id: 169,
            short_name: "65",
            travel_mode: "TRANSIT",
            vehicle_type: "Bus"
          }]
        },
        {
          arrival_time: "6:33am",
          departure_time: "5:51am",
          distance: "8.1 mi",
          duration: "42 mins",
          end_address: "Columbine St, Denver, CO, USA",
          favorite: false,
          itinerary_id: 59,
          start_address: "S Monaco Pkwy, Colorado, USA",
          steps: [{
            arrival_stop: "Monaco Pkwy & 29th Ave",
            arrival_time: "6:07am",
            color: "#0277bd",
            credit_name: "Regional Transportation District",
            credit_url: "http://rtd-denver.com/",
            departure_stop: "S Monaco Pkwy & Evans Ave",
            departure_time: "5:51am",
            distance: "5.5 mi",
            duration: "16 mins",
            headsign: "Central Park 65 via Monaco",
            id: 656,
            instructions: "Bus towards Central Park 65 via Monaco",
            name: "Monaco Parkway",
            num_stops: 24,
            possible_route_id: 169,
            short_name: "65",
            travel_mode: "TRANSIT",
            vehicle_type: "Bus"
          }]
        }];
        
        const result = favorites(undefined, {
          type: 'ADD_FAVORITE',
          favorite: [...expected]
        });
        
        expect(result).toEqual(expected);
      });

      it('should return with an empty favorites array if there is no favorite inputed', () => {
        const expected = [];
        const result =favorites(undefined, {
          type: 'ADD_FAVORITE',
          favorite: []
        });
        expect(result).toEqual(expected);
      });
    });

    describe('GET_FAVORITES', () => {
      it('should return an array of favorites if the type is GET_FAVORITES', () => {
        const expected = [{
          arrival_time: "6:33am",
          departure_time: "5:51am",
          distance: "8.1 mi",
          duration: "42 mins",
          end_address: "Columbine St, Denver, CO, USA",
          favorite: false,
          itinerary_id: 59,
          start_address: "S Monaco Pkwy, Colorado, USA",
          steps: [{
            arrival_stop: "Monaco Pkwy & 29th Ave",
            arrival_time: "6:07am",
            color: "#0277bd",
            credit_name: "Regional Transportation District",
            credit_url: "http://rtd-denver.com/",
            departure_stop: "S Monaco Pkwy & Evans Ave",
            departure_time: "5:51am",
            distance: "5.5 mi",
            duration: "16 mins",
            headsign: "Central Park 65 via Monaco",
            id: 656,
            instructions: "Bus towards Central Park 65 via Monaco",
            name: "Monaco Parkway",
            num_stops: 24,
            possible_route_id: 169,
            short_name: "65",
            travel_mode: "TRANSIT",
            vehicle_type: "Bus"
          }]
        },
        {
          arrival_time: "6:33am",
          departure_time: "5:51am",
          distance: "8.1 mi",
          duration: "42 mins",
          end_address: "Columbine St, Denver, CO, USA",
          favorite: false,
          itinerary_id: 59,
          start_address: "S Monaco Pkwy, Colorado, USA",
          steps: [{
            arrival_stop: "Monaco Pkwy & 29th Ave",
            arrival_time: "6:07am",
            color: "#0277bd",
            credit_name: "Regional Transportation District",
            credit_url: "http://rtd-denver.com/",
            departure_stop: "S Monaco Pkwy & Evans Ave",
            departure_time: "5:51am",
            distance: "5.5 mi",
            duration: "16 mins",
            headsign: "Central Park 65 via Monaco",
            id: 656,
            instructions: "Bus towards Central Park 65 via Monaco",
            name: "Monaco Parkway",
            num_stops: 24,
            possible_route_id: 169,
            short_name: "65",
            travel_mode: "TRANSIT",
            vehicle_type: "Bus"
          }]
        }];
        const result = favorites(undefined, {
          type: 'GET_FAVORITES',
          favorites: [...expected]
        });

        expect(result).toEqual(expected);
      });

      it('should return an empty array if therer are no favorites', () => {
        const expected = [];
        const result = favorites(undefined, {
          type: 'GET_FAVORITES',
          favorites: []
        });
        expect(result).toEqual(expected);
      });
    });

    describe('DELETE_FAVORITE', () => {
      it('should delete the selected favorite if the favorite id === action id', () => {
        const fav1 = {
          id: 5
        };
        const fav2 = {
          id: 6
        };
        const currentState = [fav1, fav2];
        const expected = [fav1];
        const result = favorites(currentState, {
          type: 'DELETE_FAVORITE',
          id: 6
        });

        expect(result).toEqual(expected)
      }) 
    })

    describe('SIGN_OUT_USER', () => {
      it('should return an empty state when a user signs out', () => {
        const fav1 = {
          id: 5
        };
        const fav2 = {
          id: 6
        };
        const currentState = [fav1, fav2];
        const expected = [];
        const result = favorites(currentState, {
          type: 'SIGN_OUT_USER'
        });
      });
    });
  });
});