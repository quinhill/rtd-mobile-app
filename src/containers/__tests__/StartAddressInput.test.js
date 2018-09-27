import React from 'react';
import { StartAddressInput } from '../StartAddressInput/StartAddressInput';
import { shallow } from 'enzyme'; 
import * as actions from '../../actions';
import { mapDispatchToProps } from '../StartAddressInput/StartAddressInput';

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
      const mockStartAddress = "Union Station, Denver, CO, USA";
      
      wrapper.instance().handleSelect(mockStartAddress);

      expect(mockStoreStartAddress).toHaveBeenCalledWith(mockStartAddress);
    });
    
    it('should set the state with a new start address', () => {
      const mockStartAddress = "Union Station, Denver, CO, USA";
      
      wrapper.instance().handleSelect(mockStartAddress);
      
      expect(wrapper.state('startAddress')).toEqual(mockStartAddress);
    });
  });

  describe('deleteInput', () => {
    it('should update the state of the start address on click', () => {
      const event = {
        preventDefault() {},
        target: {
          name: 'startAddress'
        }
      }
      wrapper.instance().deleteInput(event);
  
      expect(wrapper.state('startAddress')).toEqual('');
    })
  })

  describe('mapDispatchToProps', () => {
    test('should ', () => {
      const mockDispatch = jest.fn();
      const mockStartAddress = 'Union Station';
      const actionToDispatch = actions.storeStartAddress(mockStartAddress)
      const mappedProps = mapDispatchToProps(mockDispatch);
  
      mappedProps.storeStartAddress(mockStartAddress);
  
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
});

