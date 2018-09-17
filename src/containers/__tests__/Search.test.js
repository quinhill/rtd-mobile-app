import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../Search/Search';

describe('Search', () => {
  it('should matchSnapshot', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper).toMatchSnapshot();
  });
  
  describe('handleChange', () => {
    
  });
  
});
