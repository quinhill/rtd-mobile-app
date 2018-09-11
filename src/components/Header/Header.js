import React from 'react';
import './Header.css';
import SignOutButton from '../SignOut/SignOut';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

const Header = ({ authUser }) => {

  
  const NavigationAuth = () => {
    return (
      <header>
        <img src="images/rtd-logo.png" className="logo-banner" />
        <Link exact to={routes.SIGN_IN}>Sign In</Link>
      </header>
    );
  };
  
  const NavigationNonAuth = () => {
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
        ? <NavigationAuth />
        : <NavigationNonAuth />
      }
    </div>
  );
};

export default Header;