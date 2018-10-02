import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../Search/Search';
// import { history } from 'react-router-dom'

describe('Search', () => {
  let wrapper;
  let mockStoreUserSearch;
  let mockPostItineraryThunk;
  let mockStartAddress;
  let mockEndAddress;
  let mockUid;
  let mockIsLoading;
  let mockHistory;
  let mockTimeData;

  beforeEach(() => {
    mockTimeData = {
      hours: 1,
      minutes: 30,
      departing: true,
      am: true
    }
    mockStoreUserSearch = jest.fn()
    mockPostItineraryThunk = jest.fn()
    mockStartAddress = 'Union Station, Denver, CO';
    mockEndAddress = 'Ruby Hill Park, Denver, CO'
    mockHistory = jest.fn();
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
        hours={10}
        minutes={30}
      />
    )  
  })

  // it('should match snapshot test', () => {
  //   expect(wrapper).toMatchSnapshot();
  // })

  // it("should match snapshot test if this.state.am is ", () => {
    
  //   wrapper.setState({am: true});
 
  //   expect(wrapper).toMatchSnapshot();
  // });

  describe('handleChange', () => {
    it('should change the value of this.state.departing it ', () => {

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

  // describe('getTime', () => {
  //   it('should return the correct time', () => {
  //     const hours = 14;

  //     wrapper.instance().getTime()

  //     expect(wrapper.hours).toEqual(2)
  //   })
  // })
  
  describe('handleClick', () => {
    test.skip('should change the state of am from true to false on click', () => {
      const expected = false;

      wrapper.instance().handleClick();

      expect(wrapper.state('am')).toEqual(expected)
    })
  })
  
  describe.skip('handleSubmit', () => {

    it('should call makeOptions', () => {
      const event = {
        preventDefault() {}
      }
      const makeOptions = jest.fn();
      
      wrapper.instance().handleSubmit(event);

      expect(makeOptions).toHaveBeenCalledWith(mockTimeData)
    })
    
  })
  
  describe.skip('makeOptions', () => {
    test('should call itineraryUrl with coorect params', () => {
      const uid = mockUid;
      const itineraryUrl = jest.fn;

      wrapper.instance().makeOptions(uid)

      expect(itineraryUrl).toHaveBeenCalledWith(uid);
    })
    
    it('should call postItineraryThunk', () => {
      const mockPostItineraryThunk = jest.fn();
      const mockTimeData = {
        hours: 1,
        minutes: 30,
        departing: true,
        am: true
      }

      wrapper.instance().makeOptions(mockTimeData)

      expect(mockPostItineraryThunk).toHaveBeenCalled;
    })
  })
})
 

