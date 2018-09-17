import React from 'react';
import { PasswordForgetForm, PasswordForgetLink } from '../PasswordForget/PasswordForget';
import { shallow } from 'enzyme';

describe('PasswordForget', () => {
  it('should matchSnapshot', () => {
    const wrapper = shallow(<PasswordForgetForm/>);

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should call handleChange', () => {
      const wrapper = shallow( < PasswordForgetForm /> );
      const handleChange = jest.fn();
      const event = {
        target: {
          name: 'email',
          value: 'austin@gmail.com'
        }
      };

      handleChange(event);

      wrapper.find('form').simulate('change', event);
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {
    it('should call onSubmit on submission of the input field ', () => {
      const wrapper = shallow(<PasswordForgetForm/>);
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
    const wrapper = shallow(<PasswordForgetLink />);

    expect(wrapper).toMatchSnapshot();
  });
  
});



