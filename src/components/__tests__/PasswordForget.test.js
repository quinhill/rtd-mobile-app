import React from 'react';
import { PasswordForgetPage, PasswordForgetLink } from '../PasswordForget/PasswordForget';
// import { PasswordForgetForm, PasswordForgetLink } from '../PasswordForget/PasswordForget';
import { shallow } from 'enzyme';

describe('PasswordForget', () => {
  it('should matchSnapshot', () => {
    const wrapper = shallow(<PasswordForgetPage/>);

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should update handleChange', () => {
      const wrapper = shallow( < PasswordForgetPage /> );
      const handleChange = jest.fn();
      const event = {
        target: {
          name: 'email',
          value: 'austin@gmail.com'
        }
      };

      handleChange(event);

      wrapper.find('form').simulate('change', event);
      wrapper.find('form').simulate('change', event);
      expect(handleChange).toHaveBeenCalled();
      // expect(wrapper.state('name')).toEqual('email');
      expect(wrapper.state('email')).toEqual('austin@gmail.com');

    });
  });

  describe('onSubmit', () => {
    it('should call onSubmit on submission of the input field ', () => {
      const wrapper = shallow(<PasswordForgetPage/>);
      const onSubmit = jest.fn();
      const event = {
        preventDefault() {},
        target: {
          value: ''
        }
      };
      
      onSubmit(event);
      wrapper.find('form').simulate('sumbit', event);
      expect(onSubmit).toHaveBeenCalled();
    });
  });

  describe('passwordForgetLink', () => {
    it('should render a link to the forgot password component ', () => {
      const wrapper = shallow(<PasswordForgetLink />);
  
      expect(wrapper).toMatchSnapshot();
    });
    
  });
  
});



