import React, { Component } from 'react';
import { fetchScheduleThunk } from '../../thunks/fetchScheduleThunk';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


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
    this.props.fetchRouteSchedules(url);
  }

  render(){
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input 
            onChange={ this.handleChange }
            type="text" 
            name='startPoint' 
            value={ this.state.startPoint } 
            placeholder="Starting Location" 
          />
          <input 
            onChange={ this.handleChange }
            type="text" 
            name='destination' 
            value={ this.state.destination } 
            placeholder="Destination" 
          />
          <button type='submit'>Search</button>
        </form>   
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  storeRouteSchedules: (url) => dispatch(fetchScheduleThunk(url))
});

export default connect(null, mapDispatchToProps)(Search);

Search.propTypes = {
  fetchRouteSchedules: PropTypes.func
};