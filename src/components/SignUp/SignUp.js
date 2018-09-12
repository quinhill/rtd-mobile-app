import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpUser } from '../../actions';
// import { postUser } from '../../helpers/fetchRoutes';
import * as routes from '../../constants/routes';
import { auth } from '../../firebase';



// const SignUpPage = ({ history }) => {
//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <SignUpForm history={history} />
//     </div>
//   );
// };

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null
    };
  }

  createUser = (userInfo) => ({
    userId: userInfo.user.uid,
    email: userInfo.user.email    
  })

    onSubmit = (event) => {
      event.preventDefault();

      const {
        username,
        email,
        passwordOne
      } = this.state;
      
      const { history } = this.props;
      
      auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          const createUser = this.createUser(authUser);
          return createUser;
          // return postUser(createUser);
        })
        .then(response => response.json())
        .then(async user => this.props.signUpUser(user))
        .catch(error => {
          this.setState({error: error});
        });
      this.resetForm();
      history.push(routes.HOME);
    }

    resetForm = () => {
      this.setState({
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: null
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
        username,
        email,
        passwordOne,
        passwordTwo,
        error
      } = this.state;

      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

      return (
        <form onSubmit={this.onSubmit}>
          <input
            name="username"
            value={username}
            onChange={this.handleChange}
            type="text"
            placeholder="Full Name"
          />
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.handleChange}
            type="password"
            placeholder="Confirm Password"
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

const SignUpLink = () => {
  return (
    <p>
    Don't have an account?
      {' '}
      <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
  );

};

export const mapDispatchToProps = dispatch => ({
  signUpUser: (userInfo) => dispatch(signUpUser(userInfo))
});

export default withRouter(connect(null, mapDispatchToProps)(SignUpPage));

export {
  SignUpLink
};