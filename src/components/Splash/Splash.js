import React, { Component } from 'react';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage'
import Carousel from 'react-bootstrap/Carousel'

import './Splash.scss';

class Splash extends Component {
  render() {
    return (
      <div className="AboutSplash">
        <Carousel indicators={false} interval={4000}>
          <Carousel.Item>
            <ResponsiveImage projectName="naert" imageName="render-bathroom" alt="Render of a bathroom" title=""/>
          </Carousel.Item>
          <Carousel.Item>
            <ResponsiveImage projectName="nys" imageName="tv-wall" alt="Render of television wall furniture" title=""/>
          </Carousel.Item>
          <Carousel.Item>
            <ResponsiveImage projectName="atmosphere" imageName="coffee-and-lions" alt="Photo of several objects staged in a pleasing composition" title=""/>
          </Carousel.Item>
          <Carousel.Item>
            <ResponsiveImage projectName="vr" imageName="walhain" alt="Wireframe view of 3D building model of two residential buildings" title=""/>
          </Carousel.Item>
          <Carousel.Item>
            <ResponsiveImage projectName="vr" imageName="sauvenieres" alt="Isometric view of 3D modelling project for a virtual reality experience" title=""/>
          </Carousel.Item>
          <Carousel.Item>
            <ResponsiveImage projectName="furniture" imageName="bedside-table-kuroko" alt="A single leg bedside table in oak veneer and white laminate." title=""/>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Splash;
