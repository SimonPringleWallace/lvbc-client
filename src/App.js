import React, { Component } from 'react';
import './App.css';
import {BrowserRoutes} from './components/shared/browserRoutes'

class App extends Component {

  render() {

    return (
      <div className="App">
        <BrowserRoutes />
      </div>
    );
  }
}

export default App;
