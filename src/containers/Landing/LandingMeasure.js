import React, { Component } from 'react';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage'

import './Landing.scss';

class LandingMeasure extends Component {
  render() {
    return (
      <div className="App-Landing LandingMeasure">
        <h1 className="display-1">How to measure a room for interior design</h1>
        <p className="lead">Morbi vulputate laoreet dapibus elementum egestas et congue eget augue curabitur ad a porttitor senectus a.</p>
        <section>
          <ResponsiveImage projectName="landingMeasure" imageName="measure-survey-sketch-example" alt="An example sketch with measurements and annotations" title="" className=""/>
          <div>
            <h2>Starting out</h2>
            <p>Mi aptent adipiscing mollis ipsum phasellus leo integer facilisi a suspendisse dignissim eu consectetur ante nibh neque auctor parturient arcu in quisque donec quisque adipiscing id. Consectetur leo litora blandit suspendisse euismod at ultrices adipiscing molestie a tellus imperdiet ad at lectus a parturient venenatis habitant in orci ullamcorper viverra molestie parturient vestibulum scelerisque.</p>
          </div>
        </section>
      </div>
    );
  }
}

export default LandingMeasure;
