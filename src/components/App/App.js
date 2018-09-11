import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../Home/Home';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AccountPage from '../Account/Account';
import LandingPage from '../Landing/Landing';
import SignUpPage from '../SignUp/SignUp';
import SignInPage from '../SignIn/SignIn';
import PasswordForgetPage from '../PasswordForget/PasswordForget';
import { firebase } from '../../firebase';

import * as routes from '../../constants/routes';

import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null});
    });
  }
  render(){
    return (
      <div className="App">
        <div className="overlay">
          <Header 
            authUser={this.state.authUser}
          />
          <Switch>
            <Route 
              exact path={routes.LANDING} 
              component={LandingPage} 
            />
            <Route 
              exact path={routes.SIGN_UP} 
              component={SignUpPage}
            />
            <Route 
              exact path={routes.SIGN_IN} 
              component={SignInPage} 
            />
            <Route 
              exact path={routes.PASSWORD_FORGET} 
              component={PasswordForgetPage} 
            />
            <Route 
              exact path={routes.HOME} 
              component={HomePage} 
            />
            <Route 
              exact path={routes.ACCOUNT} 
              component={AccountPage} 
            />
          </Switch>
          <Footer />
        </div>
      </div>

    );
  }
}


export default App;
