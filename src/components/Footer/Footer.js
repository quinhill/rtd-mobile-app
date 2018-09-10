import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

export const Footer = () => {

  return (
    <footer className="footer_container">
      <NavLink 
        to='/favorites'
        id="favorites"
        class="icon"
      >
      </NavLink>
      <NavLink 
        exact to='/'
        id="home"
        class="icon"
      >
      </NavLink>
      <NavLink 
        to='/tickets'
        id="tickets"
        class="icon"
      >
      </NavLink> 
    </footer>
  );
};

export default Footer;
