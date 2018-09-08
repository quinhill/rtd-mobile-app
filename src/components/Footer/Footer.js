import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

export const Footer = (props) => {
  return (
    <footer className="footer_container">
    FOOTER
      {/* <NavLink>user info</NavLink> */}
      <NavLink to='/favorites'>favorites</NavLink>
      <NavLink to='/home'>home</NavLink>
      <NavLink to='/tickets'>tickets</NavLink> 
    </footer>
  )
}

export default Footer;