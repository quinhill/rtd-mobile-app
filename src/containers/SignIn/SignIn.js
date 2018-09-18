import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { auth } from '../../firebase';
import { SignUpLink } from '../SignUp/SignUp';
import { PasswordForgetLink } from 
  '../../components/PasswordForget/PasswordForget';

import { connect } from 'react-redux';
import signInThunk from '../../thunks/signInThunk';

import * as routes from '../../constants/routes';
import { signInUrl } from '../../constants/urlGenerator';

import PropTypes from 'prop-types';

import './SignIn.css';

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null
    };
  }

  resetForm = () => {
    this.setState({
      email: '',
      password: '',
      error: null
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {
      email,
      password
    } = this.state;

    const { history } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        const url = signInUrl(authUser.user.uid);
        return this.props.signInThunk(url);
      })
      .catch(error => {
        this.setState({error: error});
      });
    this.resetForm();
    history.push(routes.HOME);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      email,
      password,
      error
    } = this.state;

    const isInvalid =
    password === '' ||
    email === '';

    return (
      <div className='sign-in-page'>
        <div className='sign-in-container'>
          <h2 id='sign-in-title'>Sign In</h2>
          <form 
            className='sign-in-form'
            onSubmit={this.onSubmit}
          >
            <input
              className='sign-in-input'
              name='email'
              value={email}
              onChange={this.handleChange}
              type='email'
              placeholder='Email Address'
            />
            <input
              className='sign-in-input'
              id='sign-in-password'
              name='password'
              value={password}
              onChange={this.handleChange}
              type='password'
              placeholder='Password'
            />
            <button 
              className='sign-in-button'
              type='submit'
              disabled={isInvalid}
            >
            Sign In
            </button>

            { error && <p>{error.message}</p> }
          </form>
          <PasswordForgetLink />
          <SignUpLink />
        </div>
      </div>
    );
  }
}

export const SignInLink = () => {
  return (
    <div>
      <p>
        Already have an account?
      </p>
      <Link 
        className='link'
        to={routes.SIGN_IN}
      >
        Sign In
      </Link>
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  signInThunk: (user) => dispatch(signInThunk(user))
});

export default withRouter(connect(null, mapDispatchToProps)(SignInPage));

SignInPage.propTypes = {
  signInThunk: PropTypes.func,
  history: PropTypes.object
};