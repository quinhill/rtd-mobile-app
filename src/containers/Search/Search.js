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
  constructor(props) {
    super(props);
    this.state = {
      hours: '',
      minutes: '',
      departing: true,
      am: true
    }; 
  }

  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.user.uid) {
      const {
        hours,
        minutes,
        departing,
        am
      } = this.state;
      const depOrArr = departing
      ? 'departure_time'
      : 'arrival_time';
      const timeData = {
        [depOrArr]: timeCleaner(hours, minutes, am)
      };
      this.makeOptions(timeData);
    } else {
      this.props.history.push(routes.SIGN_UP);
    }
  }
  
  makeOptions = (timeData) => {
    const {
      startAddress,
      endAddress,
      postItineraryThunk,
      history,
      user
    } = this.props;
    
    const url = itineraryUrl(user.uid);
    const bodyObj = {
      start_address: startAddress,
      end_address: endAddress,
      ...timeData
    };
    
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyObj)
    };
    const fetchObject = {
      url,
      options
    };
    postItineraryThunk(fetchObject);
    history.push(routes.ITINERARY);
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
          <StartAddressInput />
          <EndAddressInput />
          <Time />
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  startAddress: state.startAddress,
  endAddress: state.endAddress,
  user: state.user,
  isLoading: state.isLoading
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