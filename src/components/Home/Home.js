import React, { Component } from 'react';
import Search from '../../containers/Search/Search';

import './Home.css';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';

class Home extends Component {
  
  render(){
    return(
      <div>
        <Search />
        <FavoritesContainer />
      </div>
    );
  }
}

export default Home;