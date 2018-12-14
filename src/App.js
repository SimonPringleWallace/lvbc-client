import React, { Component } from 'react';
import './App.css';
import MyCarousel from './carousel'
import NavBar from './nav'
import {HomePageAbout} from './homepageInfo'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <div className='carousel-flex'>
          <MyCarousel />
          <HomePageAbout />
        </div>
      </div>
    );
  }
}

export default App;
