import React, { Component } from 'react';
import Search from '../Search/Search';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import './Home.css';
import getFavoritesThunk from '../../thunks/getFavoritesThunk';
import * as routes from '../../constants/routes';
import { signInThunk } from '../../thunks/signInThunk';
import { firebase } from '../../firebase';
import { signInUrl, getFavoritesUrl } from '../../constants/urlGenerator';
import { getRecentUrl } from '../../constants/urlGenerator';
import getRecentThunk from '../../thunks/getRecentThunk';
import RecentSearch from '../RecentSearch/RecentSearch';

export class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      favorites: true,
    }
  }

  componentDidMount() {
    const {
      user,
      signIn,
      getFavorites,
      getRecent
    } = this.props;
    if (!user.uid) {
      firebase.auth.onAuthStateChanged(async authUser => {
        if (authUser) {
          const { uid } = authUser;
          const url = signInUrl(uid);
          const favUrl = getFavoritesUrl(uid);
          const recentUrl = getRecentUrl(uid);
          await signIn(url);
          await getFavorites(favUrl);
          await getRecent(recentUrl);
        } else {
          this.props.history.push(routes.ACCOUNT);
        }
      });
    }
  };

  toggleFavorites = () => {
    this.setState({
      favorites: !this.state.favorites
    });
  };

  render() {

    const toggleDisplay = this.state.favorites
      ? <FavoritesContainer />
      : <RecentSearch />

    const favorites = this.state.favorites
      ? 'favorites'
      : 'recents';

    const recents = this.state.favorites
      ? 'recents'
      : 'favorites';

    return (
      <div className='home-container'>
        <Search />
        <div
          className='faveRecent'
          name='favorites'
          value={this.state.favorites}
          onClick={this.toggleFavorites}
        >
          <p 
            className={favorites}
            id='favorites'
          >
            Favorites
          </p>
          <p 
            className={recents}
            id='recents'
          >
            Recent Searches
          </p>
        </div>
        {toggleDisplay}
      </div>
    );
  }
} 

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  getFavorites: url => dispatch(getFavoritesThunk(url)),
  signIn: url => dispatch(signInThunk(url)),
  getRecent: url => dispatch(getRecentThunk(url))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));

HomePage.propTypes = {
  user: PropTypes.object,
  display: PropTypes.string,
  getFavorites: PropTypes.func,
  getRecent: PropTypes.func,
  history: PropTypes.object
};