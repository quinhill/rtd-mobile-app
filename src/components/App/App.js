import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
// import Favorites from '../Favorites/Favorites';
// import Tickets from '../Tickets/Tickets';
import Search from '../../containers/Search/Search';

import './App.css';

export const App = () => {
    return (
      <div className="App">
      <Route exact path='/' component={ Home }/>
      {/* <Route exact path='/favorites' component={ Favorites }/> */}
      <Route exact path='/search' component={ Search }/>
      {/* <Route exact path= '/tickets' component={ Tickets } />      */}
      </div>
    );
  }


export default App;
