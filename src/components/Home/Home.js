import React, { Component } from 'react';
import Search from '../../containers/Search/Search';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import './Home.css';
import { getFavoritesUrl } from '../../constants/urlGenerator';
import getFavoritesThunk from '../../thunks/getFavoritesThunk';
import * as routes from '../../constants/routes';

export class HomePage extends Component {

  // componentDidMount() {
  //   setTimeout(() => this.checkForUser(), 4000);
  // }

  // checkForUser = () => {
  //   const {history, user} = this.props;
  //   if (!user.uid) {
  //     history.push(routes.SIGN_IN);
  //   }
  // }

  componentDidUpdate() {
    if (this.props.user) {
      const { user } = this.props;
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

export default withRouter(connect(mapStateToProps, mapDispatchToState)(HomePage));

HomePage.propTypes = {
  user: PropTypes.object,
  display: PropTypes.string,
  getFavorites: PropTypes.func,
  history: PropTypes.object
};