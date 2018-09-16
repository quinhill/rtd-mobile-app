import React from 'react'
import { ItineraryPage } from '../ItineraryPage/ItineraryPage';
import { shallow } from 'enzyme';

describe('ItineraryPage', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<ItineraryPage />);
    expect(wrapper).toMatchSnapShot;
  });
});
