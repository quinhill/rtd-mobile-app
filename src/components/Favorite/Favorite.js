import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './Favorite.css'; 
import { connect } from 'react-redux';
import getFavItineraryThunk from '../../thunks/getFavItineraryThunk';
import { getFavUrl } from '../../constants/urlGenerator';
import * as routes from '../../constants/routes';

export class Favorite extends Component {
  
  handleClick = (event) => {
    const { id } = event.target;
    const { 
      uid, 
      getFavItinerary, 
      history } = this.props;
    const url = getFavUrl(uid, id);
    getFavItinerary(url);
    history.push(routes.ITINERARY);
  }

  render() {
    const { favData } = this.props;
    const {
      start_address,
      end_address,
      itinerary_id
    } = favData;

    const startName = start_address.split(',')[0];
    const endName = end_address.split(',')[0];

    return (
      <button
        className='favorite-button'
        id={itinerary_id}
        onClick={this.handleClick}
      >
        {startName}
        {endName}
      </button>
    );

  }
};

export const mapPropsToState = state => ({
  uid: state.user.uid
});

export const mapDispatchToState = dispatch => ({
  getFavItinerary: (url) => dispatch(getFavItineraryThunk(url))
});

export default withRouter(connect(mapPropsToState, mapDispatchToState)(Favorite));

Favorite.propTypes = {
  name: PropTypes.string,
  favData: PropTypes.object,
  history: PropTypes.object
}; 