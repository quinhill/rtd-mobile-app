import React from 'react';
import { shallow } from 'enzyme';
import { AccountPage } from '../Account/Account';

describe('Account', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<AccountPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
