import React, { Component } from 'react';
import Search from '../../containers/Search/Search';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import './Home.css';
import getFavoritesThunk from '../../thunks/getFavoritesThunk';

export class HomePage extends Component {

  render(){
    return (
      <div className='home-container'>
        <Search />
        <FavoritesContainer />
      </div>
    );
  }
} 

export const mapStateToProps = state => ({
  user: state.user

});

export const mapDispatchToProps = dispatch => ({
  getFavorites: (url) => dispatch(getFavoritesThunk(url))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));

HomePage.propTypes = {
  user: PropTypes.object,
  display: PropTypes.string,
  getFavorites: PropTypes.func,
  history: PropTypes.object
};