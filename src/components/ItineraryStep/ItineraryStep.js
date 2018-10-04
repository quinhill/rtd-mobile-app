import React from 'react';

import './ItineraryStep.css';

export const ItineraryStep = ({handleClick, data}) => {

  const {
    arrival_stop,
    arrival_time,
    color,
    departure_stop,
    departure_time,
    headsign,
    imgUrl,
    instructions,
    line
  } = data;

  const styles = {
    background: color
  };

  if (headsign) {
    return (
      <div 
        className='transit-leg-container'
        onClick={handleClick}
      >
        <div className='step-time-data'>
          <p 
            className='depart-time'
          >
            {departure_time}
          </p>
          <p 
            className='arrive-time'
          >
            {arrival_time}
          </p>
        </div>
        <hr />
        <div className='step-locations-container'>
          <h3 
            className='depart-stop'
          >
            {departure_stop}
          </h3>
          <div className='line-info-container'>
            <img 
              alt='transit icon'
              className='transit-icon'
              src={`${imgUrl}`} 
            />
            <div 
              className='line-id-container'
              style={styles}
            >
              <p className='line-id'>
                {line}
              </p>
            </div>
          </div>
          <h3 
            className='arrive-stop'
          >
            {arrival_stop}
          </h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className='walk-leg-container'>
        <div className='instructions-container'>
          <img
            alt='walk icon'
            className='walk-icon'
            src={`${imgUrl}`} 
          />
          <p className='instructions'>
            {instructions}
          </p>
        </div>
      </div>
    );
  }
};

export default ItineraryStep;