import React, { Component } from 'react';
import Favorite from '../../components/Favorite/Favorite';
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
    const { 
      user, 
      getFavItinerary, 
      history 
    } = this.props;
    const url = getFavUrl(user.uid, value);
    await getFavItinerary(url);
    history.push(routes.ITINERARY);
  }

  deleteFavorite = async (event) => {
    const { id } = event.target;
    const {
      user,
      deleteFavItinerary
    } = this.props;
    const fetchObj = deleteFavUrl(user.uid, id);
    await deleteFavItinerary(fetchObj);
  }

  render(){
    const { 
      favorites
    } = this.props;

    const loading = <LoadingPage type='loading-container' />;

    const favoriteIds = favorites.reduce((favoritesObj, favorite) => {
      if (!favoritesObj[favorite.id]) {
        favoritesObj[favorite.id] = {...favorite};
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
      <div className='card-container'>
        <div className='card-div'>
          {this.props.isLoading === 'favorite'
            ? loading
            : favoritesData}
        </div>
      </div>
    );
  }

}

export const mapStateToProps = state => ({
  favorites: state.favorites,
  user: state.user,
  isLoading: state.isLoading
});

export const mapDispatchToState = dispatch => ({
  getFavItinerary: url => dispatch(getFavItineraryThunk(url)),
  deleteFavItinerary: fetchObj => dispatch(deleteFavItineraryThunk(fetchObj))
});

export default withRouter(connect(mapStateToProps, mapDispatchToState)(FavoritesContainer));

FavoritesContainer.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
  getFavItinerary: PropTypes.func,
  deleteFavItinerary: PropTypes.func,
  isLoading: PropTypes.string,
  history: PropTypes.object
};