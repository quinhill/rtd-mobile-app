import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../Home/HomePage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AccountPage from '../Account/AccountPage';
import LandingPage from '../Landing/LandingPage';
import SignUpPage from '../SignUp/SignUpPage';
import SignInPage from '../SignIn/SignInPage';
import PasswordForgetPage from '../PasswordForget/PasswordForgetPage';

import * as routes from '../../constants/routes';

import './App.css';

export class App extends Component {
  render(){
    return (
      
      <div className="App">
        <div className="overlay">
          <Header />
          <Router>
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
          </Router>
          <Footer />
        </div>
      </div>

    );
  }
}


export default App;
