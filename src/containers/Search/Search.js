import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import StartAddressInput from '../../containers/StartAddressInput/StartAddressInput';
import EndAddressInput from '../../containers/EndAddressInput/EndAddressInput';
import postItineraryThunk from '../../thunks/postItineraryThunk';
import * as routes from '../../constants/routes';
import { hours, minutes } from '../../constants/timeArrays';
import { timeCleaner } from '../../constants/cleanerFunctions';
import { itineraryUrl } from '../../constants/urlGenerator';

import './Search.css';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: this.getTime().hours,
      minutes: this.getTime().minutes,
      departing: true,
      am: true
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
 
  getTime = () => {
    const time = new Date();
    let hours = time.getHours();
    if (hours > 12) {
      hours -= 12;
    }
    const minutes = time.getMinutes();
    return {
      hours,
      minutes
    };
  }

  handleClick = () => {
    this.setState({
      am: !this.state.am
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.uid) {
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
      uid
    } = this.props;

    const url = itineraryUrl(uid);
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
    const { isLoading } = this.props;

    const hourOptions = hours.map((hour, index) => {
      return <option key={index} value={hour}>{hour}</option>;
    });

    const minuteOptions = minutes.map((minute, index) => {
      return <option key={index} value={minute}>{minute}</option>;
    });

    const am = this.state.am
      ? 'am'
      : 'pm';
    const pm = this.state.am
      ? 'pm'
      : 'am';
    
    return (
      <div className="container">
        <h2 className='title'>
            Search for a connection:
        </h2>
        <StartAddressInput />
        <EndAddressInput />
        <form
          className='form'
          onSubmit={this.handleSubmit}
        >
          <div className='time-select-container'>
            <div
              className='radio-container'
              name='departing'
              onChange={this.handleChange}
            >
              <input
                name='departing'
                id='departing'
                type='radio'
                defaultChecked
                value={true}
              />
              <label
                htmlFor='departing'
                className='radio-label'
              >
                  departing
              </label>
              <input
                name='departing'
                id='arriving'
                type='radio'
                value={false}
              />
              <label
                htmlFor='arriving'
                className='radio-label'
              >
                  arriving
              </label>
              <p id='at'>at</p>
            </div>
            <div className='time-container'>
              <input
                className='time-select'
                name='hours'
                onChange={this.handleChange}
                value={this.state.hours}
                list='hours'
              />
              <datalist
                id='hours'
              >
                {hourOptions}
              </datalist>
                :
              <input
                className='time-select'
                name='minutes'
                onChange={this.handleChange}
                value={this.state.minutes}
                list='minutes'
              />
              <datalist
                id='minutes'
              >
                {minuteOptions}
              </datalist>
              <div
                className='amPm'
                name='am'
                value={this.state.am}
                onClick={this.handleClick}
              >
                <p 
                  className={am}
                  id='am'
                >
                  am
                </p>
                <p 
                  className={pm}
                  id='pm'
                >
                  pm
                </p>
              </div>
            </div>
          </div>
          <button
            type='submit'
            className='button'
          >
              Search
          </button >
        </form>
      </div>
    );
  }

}

export const mapStateToProps = state => ({
  startAddress: state.startAddress,
  endAddress: state.endAddress,
  uid: state.user.uid,
  isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
  postItineraryThunk: (fetchObject) => dispatch(postItineraryThunk(fetchObject))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));

Search.propTypes = {
  postItineraryThunk: PropTypes.func,
  storeUserSearch: PropTypes.func,
  startAddress: PropTypes.string,
  endAddress: PropTypes.string,
  history: PropTypes.object,
  uid: PropTypes.string,
  isLoading: PropTypes.bool
};