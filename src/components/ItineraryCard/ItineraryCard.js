import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { topCleaner } from '../../constants/cleanerFunction';

import './ItineraryCard.css';

class ItineraryCard extends Component {
  constructor(props){
    super(props);
  }

  
  displayLine = () => {
    const { steps } = this.props.itinerary;
    console.log(steps);
  };

  addressCleaner = (address) => {
    return address.split(',')[0];
  }

  render(){
    const {
      itinerary_id,
      start_address,
      end_address,
      favorite,
      departure_time,
      arrival_time,
      duration,
      distance,
      steps
    } = this.props.itinerary;

    console.log(this.props.itinerary);
    return (
      <div 
        className='itinerary-card'
        id ={itinerary_id}
      >
        <div className='top-container'>
          <h2>
            <span className='descriptor'>towards:</span>
            {topCleaner(steps)}
          </h2>
        </div>
        <div className='trip-detail-row'>
          <h3 className="time-depart">
            {departure_time}
          </h3>
          <div className='line-container'>
            <hr className='duration-line'/>
          </div>
          <h3 className="time-depart">
            {arrival_time}
          </h3>
        </div>
        <div className='bottom-container'>
          <h2>
            <span className='descriptor'>from:</span>
            {this.addressCleaner(start_address)}
          </h2>
          <h2>{duration}</h2>
        </div>
      </div>
    );
  }
}

export default ItineraryCard;

ItineraryCard.propTypes = {
  itinerary: PropTypes.object
};