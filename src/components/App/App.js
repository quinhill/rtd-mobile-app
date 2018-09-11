import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import TicketsContainer from '../TicketsContainer/TicketsContainer';
import Search from '../../containers/Search/Search';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

import './App.css';

export class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="overlay">
          <Header />
          <Navigation />
          <Footer />
        </div>
      </div>
    );
  }
}


export default App;
