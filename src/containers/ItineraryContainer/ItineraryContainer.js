import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItineraryCard from    '../../components/ItineraryCard/ItineraryCard';

class ItineraryContainer extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <ItineraryCard 
          props={this.props.itinerary}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  itinerary: state.itinerary
});

export default connect(mapStateToProps)(ItineraryContainer);
