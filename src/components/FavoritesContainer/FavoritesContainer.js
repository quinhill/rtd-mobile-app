import React, { Component } from 'react';
import Favorite from '../Favorite/Favorite';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class FavoritesContainer extends Component {
  
  render(){
    const { favorites } = this.props;

    const favoriteIds = favorites.reduce((favoritesObj, favorite) => {
      if (!favoritesObj[favorite.itinerary_id]) {
        favoritesObj[favorite.itinerary_id] = {...favorite};
      }
      return favoritesObj;
    }, {});
    
    const favoritesData = Object.keys(favoriteIds).map((id, index) => {
      return (
        <Favorite 
          favData={favoriteIds[id]}
          key={index}
        />
      );
    });
    return (
      <div className='favorite_card-container'>
        {favoritesData}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps)(FavoritesContainer);

FavoritesContainer.propTypes = {
  favorites: PropTypes.array
};