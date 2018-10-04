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

    const {
      start_address,
      end_address,
      id
    } = favData;

    return (
      <div className='favorite-button-container'>
        <button
          className='favorite-button'
          value={id}
          onClick={searchFavorite}
        >
          <div className='address-container'>
            <p className='from-to'>From:</p>
            <p className='address'>
              {start_address.split(',')[0]}
            </p>
          </div>
          <div className='address-container'>
            <p className='from-to'>To:</p>
            <p className='address'>
              {end_address.split(',')[0]}
            </p>
          </div>
        </button>
        <button 
          className='favorite-delete-button'
          onClick={deleteFavorite}
          id={id}
        >
        </button>
      </div>
    );
  }
}

export default Favorite;

Favorite.propTypes = {
  name: PropTypes.string,
  start_address: PropTypes.string,
  end_address: PropTypes.string,
  itinerary_id: PropTypes.string,
  isLoading: PropTypes.string,
  searchFavorite: PropTypes.func,
  deleteFavorite: PropTypes.func
}; 