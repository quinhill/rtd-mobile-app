import React from 'react';
import { shallow } from 'enzyme';
import { Ticket } from '../Ticket/Ticket';

describe('Ticket', () => {
  it('should match snapShot', () => {
    const wrapper = shallow(<Ticket />);

    expect(wrapper).toMatchSnapShot();
  });
  
});
