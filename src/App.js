import React, { Component } from 'react';
import './App.css';
import MyCarousel from './carousel'
import NavBar from './nav'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <MyCarousel />
      </div>
    );
  }
}

export default App;
