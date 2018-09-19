import React from 'react';
import { shallow } from 'enzyme';
import { SignInPage } from '../SignIn/SignIn';
// import { mapDispatchToProps } from '../SignIn/SignIn;'

describe('SignIn', () => {
  let wrapper;
  let mockSignUpThunk;

  beforeEach(()=> {
    mockSignUpThunk =jest.fn();
    wrapper = shallow(
      <SignInPage 
        signUpThunk={ mockSignUpThunk }
        history={ {} }
      />);
    
  });
  describe('resetForm', () => {
    it('should reset the state when resetForm is called ', () => {
      wrapper.setState({email: 'garbageMan@ieattrash.com'});
      wrapper.instance().resetForm();
  
      expect(wrapper.state('email')).toEqual('');
    });
  });

  describe('handleChange', () => {
    
  });

  describe('deleteInput', () => {
    
  });

  describe('mapDispatchToProps', () => {
    
  });
  
  
  
  
});
