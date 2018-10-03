
import React, { Component } from 'react'; 
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import signUpThunk from '../../thunks/signUpThunk';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase';
import PropTypes from 'prop-types';
import { SignInLink } from '../SignIn/SignIn';
import { signUpUrl } from '../../constants/urlGenerator';

import './SignUp.css';

export class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      passwordOne: "",
      passwordTwo: "",
      error: null
    };
  }

  resetForm = () => {
    this.setState({
      username: "",
      email: "",
      passwordOne: "",
      passwordTwo: "",
      error: null
    });
  };

  onSubmit = async event => {
    event.preventDefault();
    const { email, passwordOne } = this.state;
    const { history, signUpThunk } = this.props;

    try {
      const authUser = await auth.doCreateUserWithEmailAndPassword(email, passwordOne);
      const newUser = signUpUrl(this.state, authUser);
      await signUpThunk(newUser);
    } catch(error) {
      this.setState({ error: error });
    }
    this.resetForm();
    history.push(routes.HOME);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  deleteInput = (event) => {
    event.preventDefault();
    const { name } = event.target;
    this.setState({ [name]: '' })
  }

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne.length < 6 ||
      email === "" ||
      username === "";

    return (
      <div className='page'>
        <div className='container'>
          <form 
            className='form'
            onSubmit={this.onSubmit}
          >
            <p className='title'>
            Sign Up
            </p>
            <div className='input-container'>
              <input
                className='input'
                name='username'
                value={username}
                onChange={this.handleChange}
                type='text'
                placeholder='Full Name'
              />
              <button
                className="delete-button"
                name='username'
                onClick={this.deleteInput}
              />
            </div>
            <div className='input-container'>
              <input
                className='input'
                name='email'
                value={email}
                onChange={this.handleChange}
                type='email'
                placeholder='Email Address'
              />
              <button
                className="delete-button"
                name='email'
                onClick={this.deleteInput}
              />
            </div>
            <div className='input-container'>
              <input
                className='input'
                name='passwordOne'
                value={passwordOne}
                onChange={this.handleChange}
                type='password'
                placeholder='Password'
              />
              <button
                className="delete-button"
                name='passwordOne'
                onClick={this.deleteInput}
              />
            </div>
            <div className='input-container last-input-container'>
              <input
                className='input'
                name='passwordTwo'
                value={passwordTwo}
                onChange={this.handleChange}
                type='password'
                placeholder='Confirm Password'
              />
              <button 
                className="delete-button" 
                name='passwordTwo'
                onClick={this.deleteInput}
              />
            </div>
            <button 
              className='button'
              type='submit'
              disabled={isInvalid}
            >
        Sign Up
            </button>
            { error && <p>{error.message}</p> }
            <p className='instructions'>
              *Password must be at least 6 characters long and must include a number
            </p>
          </form>
          <SignInLink />
        </div>
      </div>
    );
  }
}

const SignUpLink = () => {
  return (
    <p>
    Don't have an account?
      {' '}
      <Link 
        className='link'
        to={routes.SIGN_UP}
      >
        Sign Up
      </Link>

    </p>
  );
};

export const mapDispatchToProps = dispatch => ({
  signUpThunk: userInfo => dispatch(signUpThunk(userInfo))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignUpPage)
);

export { SignUpLink };

SignUpPage.propTypes = {
  signUpThunk: PropTypes.func,
  history: PropTypes.object
};
