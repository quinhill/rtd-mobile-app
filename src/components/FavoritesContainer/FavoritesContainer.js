import React, { Component } from 'react';
import Favorite from '../Favorite/Favorite';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getFavUrl } from '../../constants/urlGenerator';
import { getFavItineraryThunk } from '../../thunks/getFavItineraryThunk';
import * as routes from '../../constants/routes';

import './FavoritesContainer.css';


export class FavoritesContainer extends Component {

  handleClick = (event) => {
    const { id } = event.target;
    const { 
      uid, 
      getFavItinerary, 
      history 
    } = this.props;
    const url = getFavUrl(uid, id);
    getFavItinerary(url);
    history.push(routes.ITINERARY);
  }

  render(){
    const { 
      favorites
    } = this.props;

    const favoriteIds = favorites.reduce((favoritesObj, favorite) => {
      if (!favoritesObj[favorite.itinerary_id]) {
        favoritesObj[favorite.itinerary_id] = {...favorite};
      }
      return favoritesObj;
    }, {});
      
    const favoritesData = Object.keys(favoriteIds).map((id, index) => {
      return (
        <Favorite 
          isLoading={this.props.isLoading}
          favData={favoriteIds[id]}
          key={index}
          handleClick={this.handleClick}
        />
      );
    });
    return (
      <div className='favorite_card-container'>
        <div className='favorites-div'>
          <h2 className='favorites-title'>Favorites</h2>
          {favoritesData}
        </div>
      </div>
    );
  }
  
}

export const mapStateToProps = state => ({
  favorites: state.favorites,
  isLoading: state.isLoading,
  uid: state.user.uid
});

export const mapDispatchToState = dispatch => ({
  getFavItinerary: url => dispatch(getFavItineraryThunk(url))
});

export default withRouter(connect(mapStateToProps, mapDispatchToState)(FavoritesContainer));

FavoritesContainer.propTypes = {
  favorites: PropTypes.array,
  isLoading: PropTypes.bool,
  uid: PropTypes.string,
  getFavItinerary: PropTypes.func,
  history: PropTypes.object
};