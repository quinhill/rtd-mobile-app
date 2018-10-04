import React from 'react';
import PasswordChangeForm from '../../components/PasswordChange/PasswordChange';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignOutButton from '../SignOut/SignOut';
import SignInPage from '../SignIn/SignIn';

import './Account.css';

export const AccountPage = (props) => {

  if (props.user.uid) {
    return (
      <div className='account-page-container'>
        <PasswordChangeForm />
        <SignOutButton />
      </div>
    );
  } else {
    return (
      <div className='account-page-container'>
        <SignInPage />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(AccountPage);

AccountPage.propTypes = {
  user: PropTypes.object
};
