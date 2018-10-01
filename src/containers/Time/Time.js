import React, { Component } from 'react';
import { hours, minutes } from '../../constants/timeArrays';
import { connect } from 'react-redux';
import { setTime } from '../../actions';

import '../Search/Search.css';

export class Time extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hours: this.getTime().hours,
      minutes: this.getTime().minutes,
      am: this.getTime().am
    };
  }
  
  getTime = () => {
    const time = new Date();
    let am = true;
    let hours = time.getHours();
    const minutes = time.getMinutes();
    if (hours >= 12) {
      am = false;
      hours -= 12;
    }
    return {
      hours,
      minutes,
      am
    };
  }
  
  toggleAm = () => {
    this.setState({
      am: !this.state.am
    });
  };

  render() {
    
    const hourOptions = hours.map((hour, index) => {
      return (
        <option 
          key={index} 
          value={hour}
        >
          {hour}
        </option>
      );
    });

    const minuteOptions = minutes.map((minute, index) => {
      return (
        <option 
          key={index} 
          value={minute}
        >
          {minute}
        </option>
      );
    });

    const am = this.state.am
      ? 'am'
      : 'pm'

    const pm = this.state.am
      ? 'pm'
      : 'am'

    return (
      <div>    
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
              onClick={this.toggleAm}
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
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  time: state.time
});

export const mapDispatchToState = dispatch => ({
  setTime: time => dispatch(setTime(time))
})

export default connect(mapStateToProps, mapDispatchToState)(Time);