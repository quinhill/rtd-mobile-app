import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signOutUser } from '../../actions';

import { auth } from '../../firebase';

const SignOutButton = (props) => {
  const signOut = () => {
    auth.doSignOut();
    props.signOutUser();
  };

  return (
    <button
      type="button"
      onClick={signOut}
    >
      Sign Out
    </button>
  );
};

export const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(signOutUser())
});

export default connect(null, mapDispatchToProps)(SignOutButton);

SignOutButton.propTypes = {
  signOutUser: PropTypes.func
};