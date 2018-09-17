import React, { Component } from 'react';

import { auth } from '../../firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null
};

export class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='password-one'
          name="passwordOne"
          value={passwordOne}
          onChange={this.handleChange}
          type="password"
          placeholder="New Password"
        />
        <input
          className='password-two'
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.handleChange}
          type="password"
          placeholder="Confirm New Password"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default PasswordChangeForm;