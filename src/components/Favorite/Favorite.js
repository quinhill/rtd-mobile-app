import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Favorite.css'; 

export class Favorite extends Component {
  
  

  render() {
    const { 
      favData, 
      searchFavorite,
      deleteFavorite
    } = this.props;
    console.log(favData)
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
      <div className='favorite-button-container'>
        <button
          className='favorite-button'
          value={itinerary_id}
          onClick={searchFavorite}
        >
          {favoriteText}
        </button>
        <button 
          className='favorite-delete-button'
          onClick={deleteFavorite}
          id={itinerary_id}
        >
        </button>
      </div>
    );
  }
}

export default Favorite;

Favorite.propTypes = {
  name: PropTypes.string,
  favData: PropTypes.object,
  isLoading: PropTypes.bool,
  searchFavorite: PropTypes.func,
  deleteFavorite: PropTypes.func
}; 