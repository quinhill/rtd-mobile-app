import React from 'react';
import { shallow } from 'enzyme';
import { ItineraryStep } from '../ItineraryStep/ItineraryStep';

describe('Itinerary', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
  mockProps = {
    key: 1,
    itinerary: {
      arrival_time: "6:33am",
      departure_time: "5:51am",
      distance: "8.1 mi",
      duration: "42 mins",
      end_address: "Columbine St, Denver, CO, USA",
      favorite: false,
      itinerary_id: 59,
      start_address: "S Monaco Pkwy, Colorado, USA",
      steps: [{
        arrival_stop: "Monaco Pkwy & 29th Ave",
        arrival_time: "6:07am",
        color: "#0277bd",
        credit_name: "Regional Transportation District",
        credit_url: "http://rtd-denver.com/",
        departure_stop: "S Monaco Pkwy & Evans Ave",
        departure_time: "5:51am",
        distance: "5.5 mi",
        duration: "16 mins",
        headsign: "Central Park 65 via Monaco",
        id: 656,
        instructions: "Bus towards Central Park 65 via Monaco",
        name: "Monaco Parkway",
        num_stops: 24,
        possible_route_id: 169,
        short_name: "65",
        travel_mode: "TRANSIT",
        vehicle_type: "Bus",
      }],
      mockHandleClick: jest.fn()
    }
  }
    wrapper = shallow(
    <ItineraryStep 
      data={mockProps.itinerary.steps[0]} 
      handleClick={mockProps.mockHandleClick} 
    />)
  })

  describe('ItineraryStep', () => {
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })  
  })
  
})
