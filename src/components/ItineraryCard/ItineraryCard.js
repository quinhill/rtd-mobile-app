import React, { Component } from 'react';
class ItineraryCard extends Component {
  constructor(props){
    super(props);
  }

  
  displayLine = () => {
    const { steps } = this.props;
    const totalDuration = steps.reduce((totalDur, leg) => {
      return totalDur + parseInt(leg.duration);
    }, 0);
    console.log('totalDur: ', totalDuration)

    // const lineLength = steps.map(leg => {
    //   let total;
       
    //   total += parseInt(leg.duration);
    // });
    // return linelength; 
  };

  render(){
    const {
      itinerary_id,
      start_address,
      end_address,
      favorite,
      departure_time,
      arrival_time,
      duration,
      distance
    } = this.props;

    return (
      <div id ={itinerary_id}>
        <h2>{end_address}</h2>
        <div className='distance-line'></div>
        <div className='bottom-container'>
       {/* {this.displayLine} */}
        </div>
      </div>
    );
  }
}

export default ItineraryCard;