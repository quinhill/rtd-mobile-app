import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Favorite.css'; 

export class Favorite extends Component {
  constructor(props){
    super(props);
    this.state = {
      hidden: true
    };
  }

  showDetails = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    return (
      <div 
        className='favorite_card'
        onClick={this.showDetails}
      >
        <div className='favorite_card-name'>
          <h2>
            {this.props.name}
          </h2>
        </div>
        <div className='favorite_trip-details' hidden={this.state.hidden}>
          <h4 className='starting-point'>{this.props.startingPoint}</h4>
          <p>←→</p>
          <h4 className='destination'>{this.props.destination}</h4>
        </div>
      </div>
    );

  }
};

export default Favorite;

Favorite.propTypes = {
  name: PropTypes.string,
  startingPoint: PropTypes.string,
  destination: PropTypes.string
}; 