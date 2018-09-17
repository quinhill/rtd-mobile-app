import React from 'react';
import AuthUserContext from '../AuthUserContext';
import PasswordChangeForm from '../PasswordChange/PasswordChange';

export const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>;

export default AccountPage;