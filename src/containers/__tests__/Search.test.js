import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../Search/Search';

describe('Search', () => {
  it('should matchSnapshot', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper).toMatchSnapshot();
  });
  
  describe('handleChange', () => {
    it('should call handleChange when select input is chosen', () => {
      const wrapper = shallow(<Search />);
      const handleChange =jest.fn();
      const event = {
        target: {
          name:'hours',
          value:'1'
        }
      };
      handleChange(event);
  
      wrapper.find('.search-hours').simulate('change', event);
      expect(handleChange).toHaveBeenCalled();  
    });

    it('should update state when handleChange is called', () => {
      const wrapper = shallow(<Search />);
      const event = {
        target: {
          name:'hours',
          value:'1'
        }
      };

      wrapper.instance().handleChange(event);

      expect(wrapper.state('hours')).toEqual('1');
    });
  });
  describe('handleSubmit', () => {
    it('should call handleSubmit on the submit of the search container', () => {
      const wrapper = shallow(<Search />);
      const handleSubmit = jest.fn();
      const event = {
        preventDefault: () => {},
        target: {
          name: 'minutes',
          value: 20
        }
      };
      // handleSubmit(event);

      wrapper.find('form').simulate('submit', event)
      expect(handleSubmit).toHaveBeenCalled();
    });

    it('should call makeOptions on the submit of the search container', () => {
      const wrapper = shallow(<Search />);
      const makeOptions = jest.fn();
      const mockTimeData = {
        hours: 1,
        minutes: 20,
        departing: true
      };
      
      const event = {
        preventDefault: () => {},
        target: {
          name: 'minutes',
          value: 20
        }
      };
      handleSubmit(event);

      wrapper.find('form').simulate('submit', event);
      expect(makeOptions).toHaveBeenCalled();
    });
  });
  
});
