import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

import './PasswordForget.css';

export class PasswordForgetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: null 
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  resetState = () => {
    this.setState({
      email: '',
      error: null
    })
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.resetState()
      })
      .catch(error => {
        this.setState({error: error});
      });

    event.preventDefault();
  }

  render() {
    <div> 
      <h1>Reset your password</h1>
    </div>;

    const {
      email,
      error
    } = this.state;

    const isInvalid = email === '';

    return (
      <div className='page'>
        <div className='container'>
          <form 
            className='form'
            onSubmit={this.onSubmit}>
            <input
              className='password-forget'
              name="email"
              value={email}
              onChange={this.handleChange}
              type="email"
              placeholder="Email Address"
              />
            <button
              className='button'
              disabled={isInvalid} 
              type="submit"
              >
              Reset My Password
            </button>

            { error && <p>{error.message}</p> }
          </form>
        </div>
      </div>
    );
  }
}

export const PasswordForgetLink = () =>
  <Link 
    to={routes.PASSWORD_FORGET}
    className='password-forget-link'
  >
      Forgot Password?
  </Link>;

export default PasswordForgetPage;

