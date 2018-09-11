import React from 'react';
import { NavLink } from 'react-router-dom';

import * as routes from '../../constants/routes';

import './Footer.css';

export const Footer = () => {

  return (
    <footer className="footer_container">
      <NavLink 
        to={routes.ACCOUNT}
        id="favorites"
        class="icon"
      >
      </NavLink>
      <NavLink 
        exact to={routes.HOME}
        id="home"
        class="icon"
      >
      </NavLink>
      <NavLink 
        to={routes.TICKETS}
        id="tickets"
        class="icon"
      >
      </NavLink> 
    </footer>
  );
};

export default Footer;
