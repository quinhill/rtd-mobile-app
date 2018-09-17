import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItineraryCard from    '../../components/ItineraryCard/ItineraryCard';
import PropTypes from 'prop-types';
import {mockItinerary} from '../../__mocks__/mockItinerary';
import { postFavoriteUrl } from '../../constants/urlGenerator';
import addFavoriteThunk from '../../thunks/addFavoriteThunk';

class ItineraryPage extends Component {

  addFavorite = (event) => {
    const { id, value } = event.target;
    const idcheck = this.props.favorites.filter(favorite => (
      favorite.id === id));
    console.log(idcheck)
    const url = postFavoriteUrl(value, id);
    const fetchObject = {
      url,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    };
    this.props.addFavorite(fetchObject);
  }

  render() {
    const {
      itinerary,
      uid
    } = this.props;
    const itineraries = itinerary.map((itinerary, index) => {
      return (
        <ItineraryCard 
          key={index} 
          itinerary={itinerary} 
          uid={uid} 
          addFavorite={this.addFavorite}
        />
      );
    });
    return (
      <div>
        {itineraries}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  favorites: state.favorites,
  itinerary: state.itinerary,
  uid: state.user.uid
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: (url) => dispatch(addFavoriteThunk(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryPage);

ItineraryPage.propTypes = {
  favorites: PropTypes.array,
  itinerary: PropTypes.array,
  uid: PropTypes.string,
  addFavorite: PropTypes.func
};
