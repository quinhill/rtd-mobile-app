import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

export default Favorite;

Favorite.propTypes = {
  name: PropTypes.string,
  favData: PropTypes.object,
  isLoading: PropTypes.bool,
  handleClick: PropTypes.func
}; 