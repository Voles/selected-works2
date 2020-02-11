import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import Info from './components/Info/Info'
import Splash from './components/Splash/Splash'

import './index.scss';

ReactGA.initialize('UA-56321552-1'); // Here we should use our GA id
ReactGA.pageview("/");

ReactDOM.render(
  <div className="App">
    <Info />
    <Splash />
  </div>,
  document.getElementById('root')
);
