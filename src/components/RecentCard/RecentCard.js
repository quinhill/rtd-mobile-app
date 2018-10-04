import React from 'react';
import PropTypes from 'prop-types';

import './RecentCard.css';

const RecentCard = (props) => {
  console.log(props)
  const {
    recentData,
    searchRecent
  } = props;

  const handleClick = () => {
    const {
      start_address,
      end_address,
    } = recentData;
    const recentInfo = {
      start_address,
      end_address
    }
    searchRecent(recentInfo);
  }
  
  return (
    <button
      className='recent-button'
      onClick={handleClick}
    >
      <div className='address-container'>
        <p className='from-to'>From:</p>
        <p className='address'>
          {recentData.start_address.split(',')[0]}
        </p>
      </div>
      <div className='address-container'>
        <p className='from-to'>To:</p>
        <p className='address'>
          {recentData.end_address.split(',')[0]}
        </p>
      </div>
    </button>
  );
};

export default RecentCard;

RecentCard.propTypes = {
  recentData: PropTypes.array,
  searchRecent: PropTypes.func
};