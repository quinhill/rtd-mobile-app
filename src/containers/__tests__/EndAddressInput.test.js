import React from 'react';
import { EndAddressInput } from "../EndAddressInput/EndAddressInput";
import {  shallow } from 'enzyme';

describe('EndAddressInput', () => {
  let wrapper;
  let mockStoreEndAddress;
  beforeEach(() => {
    mockStoreEndAddress=jest.fn();
    wrapper = shallow( 
      <EndAddressInput  
        storeEndAddress={mockStoreEndAddress}
      />);
  }); 
   
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    test('should call handleChange of change of the input field ', () => {
      const mockEndAddress = 'Union Station, Denver, CO, USA';
      
      wrapper.instance().handleChange(mockEndAddress);
      expect(wrapper.state('endAddress')).toEqual(mockEndAddress);
    });
  });

  describe('handleSelect', () => {
    it('should call handleSelect on submit with the correct params', () => {
      const mockEndAddress = 'Union Station, Denver, CO, USA';
      
      wrapper.instance().handleSelect(mockEndAddress);

      expect(mockStoreEndAddress).toHaveBeenCalledWith(mockEndAddress);
    });

    it('should set the endAddress state', () => {
      const mockEndAddress = 'Union Station, Denver, CO, USA';
      
      wrapper.instance().handleSelect(mockEndAddress);

      expect(wrapper.state('endAddress')).toEqual(mockEndAddress);
    });
  });
}); 
