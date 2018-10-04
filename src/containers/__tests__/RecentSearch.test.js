import React from 'react'
import { shallow } from 'enzyme';
import { RecentSearch } from '../RecentSearch/RecentSearch';
import { mockItinerary } from '../../__mocks__/mockItinerary';

describe('RecentSearch', () => {
  it('should matchSnapshot', () => {
    const wrapper = shallow(
      <RecentSearch 
        recentSearches={[mockItinerary]}
      />);
    
    expect(wrapper).toMatchSnapshot();
  });
});