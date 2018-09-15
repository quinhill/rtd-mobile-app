import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { auth } from '../../firebase';
import { SignUpLink } from '../SignUp/SignUp';
import { PasswordForgetLink } from '../PasswordForget/PasswordForget';

import * as routes from '../../constants/routes';

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

  signIn = (authUser) => {
    const { uid } = authUser.user;
    return {
      url: `http://rtd-revamp-api.herokuapp.com/api/v1/users/${uid}`,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'applications/json'
        },
        body: JSON.stringify({})
      }
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
        const user = this.signIn(authUser);
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState({error: error});
      });
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
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.handleChange}
          type="email"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.handleChange}
          type="password"
          placeholder="Password"
        />
        <button 
          type="submit"
          disabled={isInvalid}
        >
        Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}


export default withRouter(SignInPage);