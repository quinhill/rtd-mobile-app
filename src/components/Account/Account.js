import React from 'react';
import PasswordChangeForm from '../PasswordChange/PasswordChange';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignOutButton from '../../containers/SignOut/SignOut';
import SignInPage from '../../containers/SignIn/SignIn';

import './Account.css';

export const AccountPage = (props) => {
  if (props.user.email) {
    return (
      <div className='account-page-container'>
        <div className='account-container'>
          <h3>Hi, {props.user.email}</h3>
          <SignOutButton />
          <PasswordChangeForm />
        </div>
      </div>
    );
  } else {
    return (
      <div className='account-page-container'>
        <div className='account-container'>
          <SignInPage />
        </div>
      </div>
    );
  }
};

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(AccountPage);

AccountPage.propTypes = {
  user: PropTypes.object
};