import React from 'react';
import './Header.css';
import SignOutButton from '../SignOut/SignOut';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

const Header = ({ authUser }) => {

  
  const HeaderNonAuth = () => {
    return (
      <header>
        <img src="images/rtd-logo.png" className="logo-banner" />
        <NavLink to={routes.SIGN_IN}>Sign In</NavLink>
      </header>
    );
  };
  
  const HeaderAuth  = () => {
    return (
      <header>
        <img src="images/rtd-logo.png" className="logo-banner" />
        <SignOutButton />
      </header>
    ); 
  };
  
  return (
    <div>
      { authUser
        ? <HeaderAuth />
        : <HeaderNonAuth />
      }
    </div>
  );
};

export default Header;