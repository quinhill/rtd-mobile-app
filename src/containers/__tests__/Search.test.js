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
    it('should ', () => {
      
    })
    
  })
  
})
