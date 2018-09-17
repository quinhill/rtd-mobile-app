import React from 'react';

import './ItineraryStep.css';

const ItineraryStep = ({data}) => {
  console.log(data);
  const {
    arrival_stop,
    arrival_time,
    duration,
    departure_stop,
    departure_time,
    headsign,
    imgUrl,
    instructions,
    short_name
  } = data;

  if (headsign) {
    return (
      <div className='transit-leg-container'>
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
              className='transit-icon'
              src={`${imgUrl}`} 
            />
            <p>{short_name}</p>
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