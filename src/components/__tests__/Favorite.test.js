import React from 'react';
import { shallow } from 'enzyme';
import { Favorite } from '../Favorite/Favorite';

describe('Favorite', () => {
  it('should match snapshot', () => {
    const mockFavData = {
      end_address: "1700 Wynkoop St, Denver, CO 80202, USA",
      favorite: true,
      id: 88,
      start_address: "2201, 1100 14th St, Denver, CO 80202, United States"
    };
    const mockSearchFavorite = jest.fn();
    const mockDeleteFavorite = jest.fn();

    const wrapper = shallow(
      <Favorite 
        favData={mockFavData}
        searchFavorite={mockSearchFavorite}
        deleteFavorite={mockDeleteFavorite}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});
