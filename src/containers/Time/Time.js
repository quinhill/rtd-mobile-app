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
    this.props.setTime(this.state);
  }
  
  getTime = () => {
    const time = new Date();
    let am = true;
    let hours = time.getHours();
    let minutes = time.getMinutes();
    if (hours >= 12) {
      am = false;
      hours -= 12;
    } else if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    return {
      hours,
      minutes,
      am
    };
  };

  handleChange = async (event) => {
    const { name, value } = event.target;
    await this.setState({
      [name]: value
    });
    this.props.setTime(this.state);
  };
  
  toggleAm = async () => {
    await this.setState({
      am: !this.state.am
    });
    this.props.setTime(this.state);
  };

  makeHours = () => (
    hours.map((hour, index) => {
      return (
        <option 
          key={index} 
          value={hour}
        >
          {hour}
        </option>
      );
    })
  );

  makeMinutes = () => (
    minutes.map((minute, index) => {
      return (
        <option 
          key={index} 
          value={minute}
        >
          {minute}
        </option>
      );
    })
  );

  render() {
    
    const hourOptions = this.makeHours();
    const minuteOptions = this.makeMinutes();

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