import React from 'react';
import { EndAddressInput } from "../EndAddressInput/EndAddressInput";
import {  shallow } from 'enzyme';

describe('EndAddressInput', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( <EndAddressInput />);
  });
  
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    test.skip('should call handleChange of change of the input field ', () => {
      const wrapper = shallow( <EndAddressInput />);
      const mockEndAddress = 'Union Station, Denver, CO, USA';
      const handleChange = jest.fn();
      const event = {
        preventDefault() {},
        target: {
          value: 'Union Station, Denver, CO, USA'
        }
      };
      
      handleChange(event);

      wrapper.find('input').simulate('change', event);
      expect(handleChange).toHaveBeenCalled();
      expect(wrapper.state('.location-search-input-end')).toEqual(mockEndAddress);
    });
  });

  describe('handleSelect', () => {
    it.skip('should call handleSelect on submit', () => {
      const wrapper = shallow( <EndAddressInput />);
      const mockEndAddress = 'Union Station, Denver, CO, USA';
      const handleSelect= jest.fn();
      const event = {
        // preventDefault() {},
        target: {
          value: 'mockEndAddress'
        }
      };
      
      handleChange(mockEndAddress);

      wrapper.find('input').simulate('select', event);
      expect(handleSelect).toHaveBeenCalled();
    });
  });

});
