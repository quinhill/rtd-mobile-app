import React, { Component } from 'react'
import Favorite from '../Favorite/Favorite';
import { connect } from 'react-redux';

export class FavoritesContainer extends Component {
  
  render(){
   
    return (
      <div>
      </div>
    );
  }
}

export const mapStateToProps = (props) => ({
  favorites: props.favorites
});

export default connect(mapStateToProps)(FavoritesContainer);