import * as actions from '../actions';
// import { shallow } from "enzyme";

describe('actions', () => {
  it('should have a type of IS_LOADING', () => {
    const expected = {
      type: 'IS_LOADING',
      string: 'user'
    };
    const result = actions.isLoading('user');

    expect(result).toEqual(expected);
  });

  it('should have a type of HAS_ERRORED', () => {
    const expected = {
      type: 'HAS_ERRORED',
      hasErrored: true
    };
    const result = actions.hasErrored(true);

    expect(result).toEqual(expected);
  });
  
  it('should have a type of STORE_START_ADDRESS', () => {
    const expected = {
      type: 'STORE_START_ADDRESS',
      startAddress: 'Union Station, Denver, CO, USA'
    };
    const result = actions.storeStartAddress(expected.startAddress);

    expect(result).toEqual(expected);
  });

  it('should have a type of STORE_END_ADDRESS', () => {
    const expected = {
      type: 'STORE_END_ADDRESS',
      endAddress: 'Overland Golf Course, South Huron Street, Denver, CO, USA'
    };
    const result = actions.storeEndAddress(expected.endAddress);

    expect(result).toEqual(expected);
  });

  it('should have a type of STORE_ITINERARY', () => {
    const expected = {
      type: 'STORE_ITINERARY',
      itinerary: 'Overland Golf Course, South Huron Street, Denver, CO, USA'
    };
    const result = actions.storeItinerary(expected.itinerary);

    expect(result).toEqual(expected);
  });
  
  it('should have a type of SIGN_UP_USER', () => {
    const expected = {
      type: 'SIGN_UP_USER',
      userInfo: {
        id: 7,
        created_at: "2018-09-15T20:34:14.443Z",
        updated_at: "2018-09-15T20:34:14.443Z",
        email: "ddddd@ddddd.co",
        uid: "5bhfMWMizVcYWo6Ko3wUTExOPm93",
        username: "dddd"
      }
    };
    const result = actions.signUpUser(expected.userInfo);

    expect(result).toEqual(expected);
  });

  it('should have a type of SIGN_IN_USER', () => {
    const expected = {
      type: 'SIGN_IN_USER',
      userInfo: {
        id: 7,
        created_at: "2018-09-15T20:34:14.443Z",
        updated_at: "2018-09-15T20:34:14.443Z",
        email: "ddddd@ddddd.co",
        uid: "5bhfMWMizVcYWo6Ko3wUTExOPm93",
        username: "dddd"
      }
    };
    const result = actions.signInUser(expected.userInfo);

    expect(result).toEqual(expected);
  });

  it('should have a type of SIGN_OUT_USER', () => {
    const expected = {
      type: 'SIGN_OUT_USER'
    };
    const result = actions.signOutUser();

    expect(result).toEqual(expected);
  });
});
