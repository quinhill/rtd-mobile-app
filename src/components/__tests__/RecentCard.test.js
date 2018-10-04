import React from 'react';
import { shallow } from 'enzyme';
import RecentCard from '../RecentCard/RecentCard';


describe('RecentCard', () => {
  it('should match snapshot', () => {
    const mockProps = {
      recentData: {
        end_address: "Union Station, Denver, CO 80202, USA",
        favorite: false,
        id: 199,
        start_address: "3069 S Ogden St, Englewood, CO 80113, USA"
      },
      searchRecent: jest.fn()
    };
    const mockRecentData = {
      end_address: "Union Station, Denver, CO 80202, USA",
      favorite: false,
      id: 199,
      start_address: "3069 S Ogden St, Englewood, CO 80113, USA"
    }

    const wrapper = shallow(
      <RecentCard
        props={mockProps}
        recentData={mockRecentData}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
