import React, { Component } from 'react';
import Search from '../../containers/Search/Search';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import './Home.css';

export class HomePage extends Component {

  render(){
    return (
      <div>
        <Search />
        <FavoritesContainer />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(HomePage);

HomePage.propTypes = {
  user: PropTypes.object,
  display: PropTypes.string
};