import React, { Component } from 'react';
import Search from '../../containers/Search/Search';
import ItineraryContainer from '../../containers/ItineraryContainer/ItineraryContainer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import './Home.css';

export class HomePage extends Component {
  componentDidMount(){
  }

  render(){
    return (
      <div>
        <Search />
        <ItineraryContainer />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  // user: state.user
});

export default connect(mapStateToProps)(HomePage);

HomePage.propTypes = {
  user: PropTypes.object
};