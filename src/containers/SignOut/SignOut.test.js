import React from 'react';
import { shallow } from 'enzyme';
import { SignOutButton } from '../SignOut/SignOut';

describe('SingOutButton', () => {
  it('should match Snapshot', () => {
    const mockSignOutUser = jest.fn();
    const wrapper = shallow(
      <SignOutButton 
        signOutUser={ mockSignOutUser }
      />);
      
    expect(wrapper).toMatchSnapshot();
  });
});

