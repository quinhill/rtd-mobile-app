import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Search from '../../containers/Search/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path='/' component={ Home }/>
      <Route exact path='/favorites' component={ Favorites }/>
      <Route exact path='/search' component={ Search }/>
      <Route exact path= '/tickets' component={ Tickets } />     
      </div>
    );
  }
}

export default App;
