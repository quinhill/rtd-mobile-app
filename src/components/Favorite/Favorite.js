import React from 'react';
import PropTypes from 'prop-types';

export const Favorite = ({ name }) => {
  return (
    <h2>
      {name}
    </h2>
  );
};

export default Favorite;

Favorite.propTypes = {
  name: PropTypes.string
};