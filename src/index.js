import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router} from 'react-router-dom';
import App from './App';
import history from './components/shared/history';

const appJSX = (
  <Router history={history}
  basename='/lvbc-client'
  >
  <App />
  </Router>
)

ReactDOM.render(appJSX, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
