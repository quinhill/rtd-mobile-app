import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../Landing/Landing';

describe('Landing', () => {
  it('should ', () => {
    const wrapper = shallow( <Landing />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
