import React from 'react';
import PasswordChangeForm from '../PasswordChange/PasswordChange';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignOutButton from '../../containers/SignOut/SignOut';
import SignInPage from '../../containers/SignIn/SignIn';

export const AccountPage = (props) => {
  if (props.user.email) {
    return (
      <div className='account-page-container'>
        <h3>Hi, {props.user.email}</h3>
        <SignOutButton />
        <PasswordChangeForm />
      </div>
    );
  } else {
    return (
      <div className='account-page-container'>
        <SignInPage />
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