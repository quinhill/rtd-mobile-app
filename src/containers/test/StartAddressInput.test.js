import React from 'react';
import { StartAddressInput } from '../StartAddressInput/StartAddressInput';
import { shallow } from 'enzyme'; 

describe('StartAddressInput', () => {
  it('should match snapshot', () => {
    const wrapper =  shallow(<StartAddressInput/>);

    expect(wrapper).toMatchSnapshot();
  });
  
  describe('handleChange', () => {
    it('should ', () => {
      
    });
    
  });

  describe('handleSelect', () => {
    it('should ', () => {

    });

  });
  
  
});
