import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

export const Footer = (props) => {
  return (
    <footer className="footer_container">
      {/* <NavLink>user info</NavLink> */}
      <NavLink to='/favorites'>favorites</NavLink>
      <NavLink to='/'>home</NavLink>
      <NavLink to='/tickets'>tickets</NavLink> 
    </footer>
  )
}

export default Footer;