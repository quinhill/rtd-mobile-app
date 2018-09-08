import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import TicketsContainer from '../TicketsContainer/TicketsContainer';
import Search from '../../containers/Search/Search';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';

import './App.css';

export class App extends Component {
  render(){
    return (
      <div className="App">
      <Route exact path='/' component={ Home }/>
      <Route exact path='/favorites' component={ FavoritesContainer }/>
      <Route exact path='/search' component={ Search }/>
      <Route exact path= '/tickets' component={ TicketsContainer } />     
      <Footer />
      </div>
    );
  }
  }


export default App;
