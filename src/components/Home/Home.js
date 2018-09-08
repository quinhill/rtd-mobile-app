import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Search from '../../containers/Search/Search';

import './Home.css';

class Home extends Component {
  
  render(){
    return(
      <div>
        <Search />
        {/* <Favorites /> */}
        <Footer />
      </div>
    )
  }
}

export default Home;