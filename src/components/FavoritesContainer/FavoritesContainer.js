import React, { Component } from 'react';
import Favorite from '../Favorite/Favorite';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { 
  getFavUrl,
  deleteFavUrl
} from '../../constants/urlGenerator';
import getFavItineraryThunk from '../../thunks/getFavItineraryThunk';
import deleteFavItineraryThunk from '../../thunks/deleteFavItineraryThunk';
import * as routes from '../../constants/routes';
import LoadingPage from '../../components/Loading/Loading';

import './FavoritesContainer.css';


export class FavoritesContainer extends Component {

  searchFavorite = async (event) => {
    const { value } = event.target;
    console.log(value)
    const { 
      uid, 
      getFavItinerary, 
      history 
    } = this.props;
    const url = getFavUrl(uid, value);
    await getFavItinerary(url);
    history.push(routes.ITINERARY);
  }

  deleteFavorite = async (event) => {
    const { id } = event.target;
    const {
      uid,
      deleteFavItinerary
    } = this.props;
    const fetchObj = deleteFavUrl(uid, id);
    await deleteFavItinerary(fetchObj);
  }

  render(){
    const { 
      favorites
    } = this.props;

    const loading = <LoadingPage type='loading-container' />;

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
          searchFavorite={this.searchFavorite}
          deleteFavorite={this.deleteFavorite}
        />
      );
    });
    return (
      <div className='favorite_card-container'>
        <div className='favorites-title-container'>
          <h2 className='favorites-title'>Favorites</h2>
        </div>
        <div className='favorites-div'>
          {favorites.length 
            ? favoritesData
            : loading}
        </div>
      </div>
    );
  }

}

export const mapStateToProps = state => ({
  favorites: state.favorites,
  uid: state.user.uid
});

export const mapDispatchToState = dispatch => ({
  getFavItinerary: url => dispatch(getFavItineraryThunk(url)),
  deleteFavItinerary: fetchObj => dispatch(deleteFavItineraryThunk(fetchObj))
});

export default withRouter(connect(mapStateToProps, mapDispatchToState)(FavoritesContainer));

FavoritesContainer.propTypes = {
  favorites: PropTypes.array,
  uid: PropTypes.string,
  getFavItinerary: PropTypes.func,
  history: PropTypes.object,
  deleteFavItinerary: PropTypes.func
};