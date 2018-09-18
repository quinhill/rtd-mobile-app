import React from 'react';
import { StartAddressInput } from '../StartAddressInput/StartAddressInput';
import { shallow } from 'enzyme'; 
import { storeEndAddress } from '../../actions';

describe('StartAddressInput', () => {
  it('should match snapshot', () => {
    const wrapper =  shallow(
      <StartAddressInput/>);

    expect(wrapper).toMatchSnapshot();
  });
  
  describe('handleChange', () => {
    it('should update the state of "startAddress" on change of the input field', () => {
      const wrapper = shallow(<StartAddressInput />);

      wrapper.instance().handleChange('');

      expect(wrapper.state('startAddress')).toEqual('unions station');
    });
  });

  describe('handleSelect', () => {
    it('should call storeAddress on the select of the input form ', () => {
      const wrapper = shallow(<StartAddressInput />);
      const handleSelect = jest.fn();
      const { storeStartAddress } = jest.fn();
      const event = {
        target : {
          name: 'startAdress',
          value: 'union station'
        }
      };

      handleSelect();

      wrapper.find('.start-address-input').simulate('select', event);

      expect(storeStartAddress).toHaveBeenCalled();
    });
  });
});
