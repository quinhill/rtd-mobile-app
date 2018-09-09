import React, { Component } from 'react';
import Favorite from '../Favorite/Favorite';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class FavoritesContainer extends Component {
  
  render(){
    const { favorites } = this.props;
    const createFavCards = favorites.map((favoriteRoute, index) => {
      return (<Favorite
        name={favoriteRoute.name}
        key={index}
      />);
    });

    return (
      <div>
        {createFavCards}
      </div>
    );
  }
}

export const mapStateToProps = (props) => ({
  favorites: props.favorites
});

export default connect(mapStateToProps)(FavoritesContainer);

FavoritesContainer.propTypes = {
  favorites: PropTypes.array
};