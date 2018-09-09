import React from 'react';
import PropTypes from 'prop-types';

import './Favorite.css';

export const Favorite = ({ name }) => {
  return (
    <div className='favorite_card'>
      <h2>
        {name}
      </h2>
    </div>
  );
};

export default Favorite;

Favorite.propTypes = {
  name: PropTypes.string
}; 