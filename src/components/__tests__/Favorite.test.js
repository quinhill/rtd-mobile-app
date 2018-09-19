import React from 'react';
import { shallow } from 'enzyme';
import { Favorite } from '../Favorite/Favorite';
import { mockItinerary } from '../../__mocks__/mockItinerary';

describe('Favorite', () => {
  it('should match snapShot', () => {
    const mockName = 'austin';
    const mockData = mockItinerary;
    const mockStart = 'union station, denver, co';
    // const mockEnd = 'overland golf course';
    const wrapper = shallow(
      <Favorite 
        name={mockName}
        favData={[mockData]}
        startAddress ={mockStart}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
