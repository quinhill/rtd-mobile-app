import React, { Component } from 'react';
import { connect } from 'react-redux';


class RecentSearch extends Component {

  render() {
    return (
      <div></div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  recentSearches: state.recentSearches
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentSearch);