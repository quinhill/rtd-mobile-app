import React from 'react'
import { shallow } from 'enzyme';
import { FavoritesContainer } from '../FavoritesContainer/FavoritesContainer';
import { mockItinerary } from '../../__mocks__/mockItinerary';

describe('FavoritesContainer', () => {
  it('should matchSnapshot', () => {
    const wrapper = shallow(
      <FavoritesContainer 
        favorites={[mockItinerary]}
      />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
