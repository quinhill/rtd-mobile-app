import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Search from '../../containers/Search/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
