import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { displaySelected } from '../../actions';
import PropTypes from 'prop-types';

import './Footer.css';

export const Footer = (props) => {

  const selectDisplay = (event) => {
    event.preventDefault();
    const { id } = event.target;
    console.log(id);
    props.selectDisplay(id);
  };

  return (
    <footer className="footer_container">
      {/* <NavLink>user info</NavLink> */}
      <NavLink 
        to='/favorites'
      >
        <img 
          src="/images/user.svg" 
          className="icon"
          onClick={selectDisplay}
          id="favorites"
        />
      </NavLink>
      <NavLink 
        to='/'
      >
        <img 
          src="/images/home.svg" 
          className="icon" 
          onClick={selectDisplay}
          id="home"
        />
      </NavLink>
      <NavLink 
        to='/tickets'
      >
        <img 
          src="/images/tickets.svg" className="icon" 
          onClick={selectDisplay}
          id="tickets"
        />
      </NavLink> 
    </footer>
  );
};

export const mapDispatchToProps = dispatch => ({
  selectDisplay: (selected) => dispatch(displaySelected(selected))
});

export default connect(null, mapDispatchToProps)(Footer);

Footer.propTypes = {
  selectDisplay: PropTypes.func
};