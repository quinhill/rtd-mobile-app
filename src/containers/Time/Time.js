import React, { Component } from 'react';
import { hours, minutes } from '../../constants/timeArrays';
import '../Search/Search.css';

export class Time extends Component {
  constructor() {
    super()
    this.state = {
      hour: '',
      minute: '',
      am: true
    }
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

  render() {
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
      <div>
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
    )
  }
}

export default Time;