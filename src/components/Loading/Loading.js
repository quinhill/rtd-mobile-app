import React from 'react';
import './Loading.css';
import PropTypes from 'prop-types';

export const LoadingPage = (props) => {
  const { type } = props;

  if (type === 'loading-page') {
    return (
      <div className='loading-page'>
        <img
          alt='loading spinner'
          className='loading-icon-white' 
          src='/spinner-white.svg' />
      </div>
    );
  } else if (type === 'loading-container') {
    return (
      <div className='loading-container'>
        <img 
          alt='loading spinner'
          className='loading-icon-red'
          src='/spinner-red.svg' />
      </div>
    );
  }
};

export default LoadingPage;

LoadingPage.propTypes = {
  type: PropTypes.string
};