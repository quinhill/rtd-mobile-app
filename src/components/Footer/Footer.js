import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

export const Footer = (props) => {
  return (
    <footer className="footer_container">
      {/* <NavLink>user info</NavLink> */}
      <NavLink to='/favorites'>
        <img 
          src="/images/user.svg" 
          className="icon" 
        />
      </NavLink>
      <NavLink to='/'>
        <img 
          src="/images/home.svg" 
          className="icon" 
          id="home-icon" 
        />
      </NavLink>
      <NavLink to='/tickets'>
        <img 
          src="/images/tickets.svg" className="icon" 
          id="tickets-icon"
        />
      </NavLink> 
    </footer>
  );
};

export default Footer;