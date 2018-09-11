import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { auth } from '../../firebase';
import { SignUpLink } from '../SignUp/SignUp';
import { PasswordForgetLink } from '../PasswordForget/PasswordForget';

import * as routes from '../../constants/routes';

const SignInPage = ({ history }) => {
  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm history={history} />
      <SignUpLink />
      <PasswordForgetLink />
    </div>
  );
};

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};


class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
  }

    onSubmit = (event) => {
      const {
        email,
        password
      } = this.state;

      const { history } = this.props;
  
      auth.doSignInWithEmailAndPassword(email, password)
        .then(authUser => {
          this.setState({ ...INITIAL_STATE });
          history.push(routes.HOME);
        })
        .catch(error => {
          this.setState({error: error});
        });
  
      event.preventDefault();
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

export {
  SignInForm
};