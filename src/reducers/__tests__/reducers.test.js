import endAddress from '../endAddressReducer';
import hasErrored from '../hasErroredReducer';
import isLoading from '../isLoadingReducer';
import itinerary from '../itineraryReducer';
import startAddress from '../startAddressReducer';
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
      const expected = false;
      const result = isLoading(undefined, '');

      expect(result).toEqual(expected);
    });

    it('should return state with a boolean', () => {
      const expected = true;
      const result = isLoading(undefined, {
        type: 'IS_LOADING',
        isLoading: true
      });

      expect(expected).toEqual(result);
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
});