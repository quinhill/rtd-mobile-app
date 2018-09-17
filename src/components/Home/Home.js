import React, { Component } from 'react';
import Search from '../../containers/Search/Search';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import './Home.css';
import { getFavoritesUrl } from '../../constants/urlGenerator';
import getFavoritesThunk from '../../thunks/getFavoritesThunk';

export class HomePage extends Component {

  componentDidUpdate() {
    if (this.props.user) {
      const { user } = this.props;
      console.log(user.uid);
      const url = getFavoritesUrl(user.uid);
      this.props.getFavorites(url);
    }
  }

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
  user: state.user
});

export const mapDispatchToState = dispatch => ({
  getFavorites: (url) => dispatch(getFavoritesThunk(url))
});

export default connect(mapStateToProps, mapDispatchToState)(HomePage);

HomePage.propTypes = {
  user: PropTypes.object,
  display: PropTypes.string,
  getFavorites: PropTypes.func
};