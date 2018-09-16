import React from 'react';
import { shallow } from 'enzyme';
import { Favorite } from '../Favorite/Favorite';

describe('Favorite', () => {
  it('should match snapShot', () => {
    const wrapper = shallow(<Favorite />);
    expect(wrapper).toMatchSnapShot();
  });
});
