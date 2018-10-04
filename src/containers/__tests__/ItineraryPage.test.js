import React from 'react';
import { ItineraryPage } from '../ItineraryPage/ItineraryPage';
import { shallow } from 'enzyme';

describe('ItineraryPage', () => {
  it('should match snapshot', () => {
    const mockFavorites = [{
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
        vehicle_type: "Bus"
      },
      {
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
          vehicle_type: "Bus"
        }]
      }]
    }];

    const mockItinerary = [{
      itinerary_id: 92,
      start_address: "LoDo, Denver, CO 80202, USA",
      end_address: "650 15th St, Denver, CO 80202, USA",
      favorite: false,
      departure_time: "11:02am",
      arrival_time: "11:12am",
      duration: "10 mins",
      distance: "0.8 mi",
      title: null
    }];

    const wrapper = shallow(
      <ItineraryPage
        favorites={mockFavorites}
        user={{uid: '12'}}
        addFavorite={jest.fn()}
        itinerary={mockItinerary}
      />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    test('should return an object with an itinerary', () => {
      
    });
    
  });
  
});
