import React, { Component } from 'react';
import { fetchScheduleThunk } from '../../thunks/fetchScheduleThunk';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StartPointInput from '../../components/StartPointInput/StartPointInput';
import EndPointInput from '../../components/EndPointInput/EndPointInput';

import './Search.css';

export class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      startPoint: '',
      destination: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const url = 'somestring';
    this.props.storeRouteSchedules(url);
    this.props.storeUserSearch(this.state);  
    this.setState({startPoint: '', destination: ''});
  }

  render(){
    return (
      <div className="search_container">
        <StartPointInput />
        <EndPointInput />
        <form className='time'>
          <select name='hours'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
          </select>
          <select name='minutes'>
            <option value='00'>00</option>
            <option value='05'>05</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
            <option value='25'>25</option>
            <option value='30'>30</option>
            <option value='35'>35</option>
            <option value='40'>40</option>
            <option value='45'>45</option>
            <option value='50'>50</option>
            <option value='55'>55</option>
          </select>
          <input 
            id='departure'
            className='departure-arrival' 
            type='radio' 
            value='departing'
          />
          <label HTMLfor='departure'>
            departing
          </label>
          <input
            id='arrival'
            className='departure-arrival' 
            type='radio' 
            value='arriving'
          />
          <label HTMLfor='arrival'>
            arriving
          </label>
          <p>at</p>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({

});

// export const mapDispatchToProps = dispatch => ({
//   storeRouteSchedules: (url) => dispatch(fetchScheduleThunk(url)),
//   storeUserSearch: (startingPoint, destination) => (
//     dispatch(storeUserSearch(startingPoint, destination)))
// });

export default connect(mapStateToProps)(Search);

Search.propTypes = {
  storeRouteSchedules: PropTypes.func,
  storeUserSearch: PropTypes.func
};