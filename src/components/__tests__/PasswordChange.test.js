import React from 'react';
import { PasswordChangeForm } from '../PasswordChange/PasswordChange';
import { shallow } from 'enzyme';

describe('PasswordChange', () => {
  it('should matchSnapshot', () => {
    const wrapper = shallow(<PasswordChangeForm/>);

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should call handleChange of change of the input field ', () => {
      const wrapper = shallow(<PasswordChangeForm/>);
      const mockPassword = '123456';
      const handleChange = jest.fn();
      const event = {
        // preventDefault() {},
        target: {
          name: 'passwordOne',
          value: '123456'
        }
      };
      
      handleChange(event);

      wrapper.find('.password-one').simulate('change', event);
      expect(handleChange).toHaveBeenCalled();
      expect(wrapper.state('passwordOne')).toEqual(mockPassword);
    });
  });

  describe('handleSubmit', () => {
    it('should call handlesubmit of change of the input field ', () => {
      const wrapper = shallow(<PasswordChangeForm/>);
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
});
