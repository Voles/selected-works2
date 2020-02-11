import React, { Component } from 'react';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage'
import Carousel from 'react-bootstrap/Carousel'

import './Splash.scss';

class Splash extends Component {
  render() {
    return (
      <div className="App-Splash">
        <Carousel indicators={false} interval={4000}>
          <Carousel.Item>
            <ResponsiveImage projectName="naert" imageName="render-bathroom" alt="Render of a bathroom" title=""/>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Splash;
