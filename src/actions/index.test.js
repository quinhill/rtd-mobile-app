import * as actions from '../actions';
// import { shallow } from "enzyme";

describe.only('actions', () => {
  it('should have a type of IS_LOADING', () => {
    const expected = {
      type: 'IS_LOADING',
      isLoading: true
    };
    const result = actions.isLoading(true);

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
});
