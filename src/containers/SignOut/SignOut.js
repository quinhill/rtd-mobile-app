import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signOutUser } from '../../actions';

import { auth } from '../../firebase';

import './SignOut.css';

export const SignOutButton = (props) => {
  const signOut = () => {
    auth.doSignOut();
    props.signOutUser();
  };

  return (
    <div 
      className='form'
      id='sign-out-container'
    >
      <h3 className='title'>
        To sign out...
      </h3>
      <button
        className='button'
        
        type='button'
        onClick={signOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(signOutUser())
});

export default connect(null, mapDispatchToProps)(SignOutButton);

SignOutButton.propTypes = {
  signOutUser: PropTypes.func
};