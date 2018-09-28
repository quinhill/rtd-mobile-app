import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { infoCleaner, cleanStep } from '../../constants/cleanerFunctions';
import ItineraryStep from '../ItineraryStep/ItineraryStep';

import './ItineraryCard.css';

export class ItineraryCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMore: false
    };
  } 

  handleClick = () => {
    this.setState({
      showMore: !this.state.showMore
    });
  }

  addressCleaner = (address) => {
    return address.split(',')[0];
  }

  render(){
    
    const {
      itinerary_id,
      arrival_time,
      duration,
      steps
    } = this.props.itinerary;

    const info = infoCleaner(steps);

    const lineStyles = {
      background: info.color
    };

    if (this.state.showMore) {
      return steps.map((step, index) => {
        const props = cleanStep(step);
        return (
          <ItineraryStep 
            data={props}
            key={index}
            handleClick={this.handleClick}
          />
        );
      });
    } else {
      return (
        <div 
          className='itinerary-card'
          id ={itinerary_id}
          onClick={this.handleClick}
        >
          <div className='top-container'>
            <img
              alt='transit-icon'
              className='transit-icon'
              src={info.imgUrl} 
            />
            <div 
              className='line-id-container'
              style={lineStyles}
            >
              <p className='line-id'>
                {info.line}
              </p>
            </div>
            <h2>
              Towards {info.headsign}
            </h2>
          </div>
          <div className='trip-detail-row'>
            <h3 className="time-depart">
              {info.departure_time}
            </h3>
            <div className='duration-line-container' >
              <span className='dot'></span>
              <hr className='duration-line' />
            </div>
            <h3 className="time-depart">
              {arrival_time}
            </h3>
          </div>
          <div className='bottom-container'>
            <h2>
              From {info.departure_stop}
            </h2>
            <h2>{duration}</h2>
          </div>
        </div>
      );
    }
  }
}

export default ItineraryCard;

ItineraryCard.propTypes = {
  itinerary: PropTypes.object,
  addFavorite: PropTypes.func,
  uid: PropTypes.string
};