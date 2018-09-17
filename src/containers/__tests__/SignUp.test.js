import React from 'react';
import { shallow } from 'enzyme'; 
import { SignUpPage } from '../SignUp/SignUp';

describe('SignUpPage', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<SignUpPage/>);

    expect(wrapper).toMatchSnapshot();
  });


  describe('CreateUser', () => {
    it('should have an initial state of no user info', () => {
      const wrapper = shallow(<SignUpPage />);

    });
    
  });
  
});
