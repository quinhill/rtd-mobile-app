import React from 'react';
import { EndAddressInput } from "../EndAddressInput/EndAddressInput";
import {  shallow } from 'enzyme';
import * as actions from '../../actions';
import { mapDispatchToProps } from '../EndAddressInput/EndAddressInput';

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
    it('should call storeEndAddress with the correct params', () => {
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

  describe('deleteInput', () => {
    it('should delete input from endAddress input field on click', () => {
      const event = {
        preventDefault() {},
        target : {
          name: 'endAddress'
        }
      };

      wrapper.instance().deleteInput(event);

      expect(wrapper.state('endAddress')).toEqual('');
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      const mockDispatch = jest.fn();
      const mockEndAddress = 'Union Station';
      const actionToDispatch = actions.storeEndAddress(mockEndAddress);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.storeEndAddress(mockEndAddress);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
}); 
