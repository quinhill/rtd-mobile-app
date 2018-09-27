import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../Search/Search';

describe('Search', () => {
  let wrapper;
  let mockStoreUserSearch;
  let mockPostItineraryThunk;
  let mockStartAddress;
  let mockEndAddress;
  let mockHistory;
  let mockUid;
  let mockIsLoading;

  beforeEach(() => {
    mockStoreUserSearch = jest.fn()
    mockPostItineraryThunk = jest.fn()
    mockStartAddress = 'Union Station, Denver, CO';
    mockEndAddress = 'Ruby Hill Park, Denver, CO'
    // mockHistory = jest.fn();
    mockUid= '123456abcdefg'
    mockIsLoading=false
    wrapper = shallow(
      <Search
        postItineraryThunk = {mockPostItineraryThunk}
        storeUserSearch = {mockStoreUserSearch}
        startAddress = {mockStartAddress}
        endAddress = {mockEndAddress}
        uid = {mockUid}
        isLoading = {mockIsLoading}
        am={false}
        departing={false}
      />
    )
  })

  it('should match snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it("should match snapshot test if this.state.am is ", () => {

    wrapper.setState({am: true});
 
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot test if this.state.departing is true ", () => {

    wrapper.setState({ departing: true });

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should change the value of', () => {

      const event = {
        target: {
          name: 'departing',
          value: false
        }
      } 
      const expected = false;

      wrapper.instance().handleChange(event);

      expect(wrapper.state('departing')).toEqual(expected)
    })
  })

  describe('handleClick', () => {
    test('should change the state of am from true to false on click', () => {
      const expected = false;

      wrapper.instance().handleClick();

      expect(wrapper.state('am')).toEqual(expected)
    })
    
  })
  
  
  // describe('makeOptions', () => {
  //   test('should call postItineraryThunk', () => {
  //     const mockTimeData = {
  //       hours: 1,
  //       minutes: 30,
  //       departing: true,
  //       am: true
  //     }

  //     wrapper.instance().makeOptions(mockTimeData)
  //   })
    
  // })
  
})
 

