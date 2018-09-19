import React from 'react';
import { StartAddressInput } from '../StartAddressInput/StartAddressInput';
import { shallow } from 'enzyme'; 
import { storeEndAddress } from '../../actions';

describe('StartAddressInput', () => {
  let wrapper;
  let mockStoreStartAddress;

  beforeEach(() => {
    mockStoreStartAddress= jest.fn();
    wrapper = shallow(
      <StartAddressInput
        storeStartAddress={mockStoreStartAddress}
      />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  describe('handleChange', () => {
    it('should update the state of "startAddress" on change of the input field', () => {
      const mockStartAddress = 'Union Station, Denver, CO, USA';

      wrapper.instance().handleChange(mockStartAddress);
      expect(wrapper.state('startAddress')).toEqual(mockStartAddress);
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
