import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItineraryCard from    '../../components/ItineraryCard/ItineraryCard';
import PropTypes from 'prop-types';
import {mockItinerary} from '../../__mocks__/mockItinerary';

class ItineraryPage extends Component {
  constructor(props){
    super(props);

  }



  render() {
    console.log(this.props.itinerary);
    const itineraries = this.props.itinerary.map((itinerary, index) => {
      return <ItineraryCard key={index} itinerary={itinerary} />;
    });
    return (
      <div>
        {itineraries}
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
