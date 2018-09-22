import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingPage from '../../components/Loading/Loading';

import './Favorite.css'; 

export class Favorite extends Component {
  
  

  render() {
    const { 
      favData, 
      isLoading,
      handleClick
    } = this.props;
    const {
      start_address,
      end_address,
      itinerary_id
    } = favData;

    let startName;
    let endName;
    if (start_address) {
      startName = start_address.split(',')[0];
      endName = end_address.split(',')[0];
    }

    const favoriteText = `from: ${startName} to: ${endName}`;

    if (isLoading) {
      return (
        <LoadingPage type='favorites' />
      );
    } else { 
      return (
        <button
          className='favorite-button'
          id={itinerary_id}
          onClick={handleClick}
        >
          {favoriteText}
        </button>
      );
    }
  }
}

export default Favorite;

Favorite.propTypes = {
  name: PropTypes.string,
  favData: PropTypes.array,
  isLoading: PropTypes.bool,
  handleClick: PropTypes.func
}; 