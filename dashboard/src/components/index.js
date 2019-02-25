import React, { Component } from 'react';
import { Header } from './Header/Header'
import { Nav } from './Nav/Nav'
import Routes from './Router/Routes'

import './index.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
