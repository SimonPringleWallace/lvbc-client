import React, { Component } from 'react';
import './App.css';
import MyCarousel from './carousel'
import NavBar from './nav'
import {HomePageAbout} from './homepageInfo'
import {BrowserRoutes} from './browserRoutes'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <div className='carousel-flex'>
          <MyCarousel />
          <HomePageAbout />
        </div>
        <BrowserRoutes />
      </div>
    );
  }
}

export default App;
