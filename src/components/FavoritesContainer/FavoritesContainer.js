import React, { Component } from 'react';
import Favorite from '../Favorite/Favorite';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class FavoritesContainer extends Component {
  
  render(){
    // const { favorites } = this.props;

    // const createFavCards = favorites.map((favoriteRoute, index) => {
    //   return (<Favorite
    //     name={favoriteRoute.name}
    //     startingPoint={favoriteRoute.origin}
    //     destination={favoriteRoute.terminus}
    //     key={index}
    //   />);  
    // });

    return (
      <div className='favorite_card-container'>
        {/* {createFavCards} */}
      </div>
    );
  }
}

export const mapStateToProps = (props) => ({
});

export default connect(mapStateToProps)(FavoritesContainer);

FavoritesContainer.propTypes = {
  favorites: PropTypes.array
};