import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import StartAddressInput from '../../containers/StartAddressInput/StartAddressInput';
import EndAddressInput from '../../containers/EndAddressInput/EndAddressInput';
import postItineraryThunk from '../../thunks/postItineraryThunk';
import * as routes from '../../constants/routes';
import Time from '../Time/Time';
import { timeCleaner } from '../../constants/cleanerFunctions';
import { itineraryUrl } from '../../constants/urlGenerator';
import { storeStartAddress } from '../../actions';

import './Search.css';
import LoadingPage from '../../components/Loading/Loading';
import { geocode } from '../../constants/geocoder';

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      departing: true
    };
  }

  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  submitSearch = async (event) => {
    event.preventDefault();
    if (this.props.user.uid) {
      const { departing } = this.state;
      const {
        time,
        postItineraryThunk,
        history
      } = this.props;
      const depOrArr = departing
      ? 'departure_time'
      : 'arrival_time';
      const timeData = {
        [depOrArr]: timeCleaner(time.hours, time.minutes, time.am)
      };
      const fetchObject = itineraryUrl({...this.props, timeData});
      await postItineraryThunk(fetchObject);
      history.push(routes.ITINERARY);
    } else {
      this.props.history.push(routes.SIGN_UP);
    }
  };
  
  render() {

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    const success = async (pos) => {
      const crd = pos.coords;
      const address = await geocode(crd.latitude, crd.longitude);
      if (!this.props.startAddress) {
        this.props.storeStartAddress(address);
      }
    };
    
    const error = (err) => {
      return `ERROR(${err.code}): ${err.message}`;
    };
    
    if (window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options)
    }
    
    const { user } = this.props;
    
    if (this.props.isLoading) {
      return (
        <div className='container'>
          <LoadingPage type='loading-container' />
        </div>
      );
    } else {
      return (
        <div className="container">
          <h2 className='title'>
              Search for a connection:
          </h2>
          <form
          className='form'
          onSubmit={this.submitSearch}
          >
            <StartAddressInput />
            <EndAddressInput />
            <Time />
            <button
              type='submit'
              className='button'
            >
              Search
            </button>
          </form>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  startAddress: state.startAddress,
  endAddress: state.endAddress,
  user: state.user,
  isLoading: state.isLoading,
  time: state.time
});

export const mapDispatchToProps = dispatch => ({
  storeStartAddress: (address) => dispatch(storeStartAddress(address)),
  postItineraryThunk: (fetchObject) => dispatch(postItineraryThunk(fetchObject))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
 
Search.propTypes = {
  postItineraryThunk: PropTypes.func,
  storeUserSearch: PropTypes.func,
  startAddress: PropTypes.string,
  endAddress: PropTypes.string,
  history: PropTypes.object,
  user: PropTypes.object,
  isLoading: PropTypes.bool,
  storeStartAddress: PropTypes.func
};