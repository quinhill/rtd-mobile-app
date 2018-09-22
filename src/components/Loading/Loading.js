import React from 'react';
import './Loading.css';
import PropTypes from 'prop-types';

const LoadingPage = (props) => {
  const { type } = props;

  if (type === 'itinerary') {
    return (
      <div className='itinerary-loading'>
        <img src='/spinner-white.svg' />
      </div>
    );
  } else if (type === 'favorites') {
    return (
      <div className='favorites-loading'>
        <img src='/spinner-red.svg' />
      </div>
    );
  }

};

export default LoadingPage;

LoadingPage.propTypes = {
  type: PropTypes.string
};