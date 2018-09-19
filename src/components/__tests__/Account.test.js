import React from 'react';
import { shallow } from 'enzyme';
import { AccountPage } from '../Account/Account';

describe('Account', () => {
  it('should match Snapshot', () => {
    const mockEmail =' a@.com';
    const mockUid = '12';
    const wrapper = shallow(
      <AccountPage 
        user={{mockEmail, mockUid}}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});
