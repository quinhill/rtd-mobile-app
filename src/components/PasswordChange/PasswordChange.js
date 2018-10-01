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

  deleteInput = (event) => {
    event.preventDefault();
    const { name } = event.target;
    this.setState({ [name]: '' })
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
      <form 
        className='form'
        onSubmit={this.onSubmit}
      >
        <h3 className='title'>
          Would you like to change your password?
        </h3>
        <div className='input-container'>
          <input
            className='input'
            name='passwordOne'
            value={passwordOne}
            onChange={this.handleChange}
            type='password'
            placeholder='New Password'
          />
          <button 
            className='delete-button'
            name='passwordTwo'
            onClick={this.deleteInput}
          >
          </button>
        </div>
        <div 
          className='input-container last-input-container'
        >
          <input
            className='input'
            name='passwordTwo'
            value={passwordTwo}
            onChange={this.handleChange}
            type='password'
            placeholder='Confirm New Password'
          />
          <button 
            className='delete-button'
            name='passwordTwo'
            onClick={this.deleteInput}
          >
          </button>
        </div>
        <button 
          className='button'
          disabled={isInvalid} 
          type='submit'>
          Reset My Password
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default PasswordChangeForm;