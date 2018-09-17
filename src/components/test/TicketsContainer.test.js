import React from 'react';
import { shallow } from 'enzyme';
import { TicketContainer } from '../TicketsContainer/TicketsContainer';

describe('TicketContainer', () => {
  it('should match snapShot', () => {
    const wrapper = shallow(<TicketContainer />);

    expect(wrapper).toMatchSnapShot();
  });
  
});