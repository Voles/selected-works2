import React, { Component } from 'react';
import Info from '../components/Info/Info';
import Splash from '../components/Splash/Splash';

import './About.scss';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Info />
        <Splash />
      </div>
    );
  }
}

export default About;
