import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecentButton from '../../components/RecentCard/RecentCard';
import { searchRecentUrl } from '../../constants/urlGenerator';
import * as routes from '../../constants/routes';
import postItineraryThunk from '../../thunks/postItineraryThunk';
import { withRouter } from 'react-router-dom';

import '../FavoritesContainer/FavoritesContainer.css';

export class RecentSearch extends Component {

  searchRecent = async (bodyObj) => {
    const fetchInfo = {
      uid: this.props.user.uid,
      bodyObj
    }
    const fetchObject = searchRecentUrl(fetchInfo);
    await this.props.postItinerary(fetchObject);
    this.props.history.push(routes.ITINERARY);
  };

  render() {
    const { recentSearches } = this.props;

    const recentDisplay = recentSearches.reverse().map((itinerary, index) => {
      return (
        <RecentButton 
          recentData={itinerary}
          key={index}
          searchRecent={this.searchRecent}
        />
      )
    })

    return (
      <div className='card-div'>
        {recentDisplay}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  recentSearches: state.recentSearches
});

export const mapDispatchToProps = dispatch => ({
  postItinerary: fetchObject => dispatch(postItineraryThunk(fetchObject))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecentSearch));