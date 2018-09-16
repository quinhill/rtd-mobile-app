import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItineraryCard from    '../../components/ItineraryCard/ItineraryCard';
import PropTypes from 'prop-types';
import {mockItinerary} from '../../__mocks__/mockItinerary';

export class ItineraryPage extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <ItineraryCard 
          props={mockItinerary[0]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  itinerary: state.itinerary
});

export default connect(mapStateToProps)(ItineraryPage);

ItineraryPage.propTypes = {
  itinerary: PropTypes.object
};
