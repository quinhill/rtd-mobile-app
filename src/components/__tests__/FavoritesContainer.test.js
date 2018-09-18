import React from 'react'
import { shallow } from 'enzyme';
import { FavoritesContainer } from '../FavoritesContainer/FavoritesContainer';

describe('FavoritesContainer', () => {
  it('should matchSnapshot', () => {
    const wrapper = shallow(<FavoritesContainer />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
