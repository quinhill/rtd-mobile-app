import React, { Component } from 'react';
import { connect } from 'react-redux';



class RecentSearch extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

export const mapStateToProps = state => ({
  
});

export const mapDispatchToProps = dispatch => ({
  getRecent: url => dispatch(getRecentThunk(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecentSearch);