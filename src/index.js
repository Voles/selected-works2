import React, { Suspense, lazy } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import TagManager from 'react-gtm-module';
import { render } from 'react-snapshot';

import './index.scss';

const About = lazy(() => import('./containers/About/About'));
const LandingStorage = lazy(() => import('./containers/Landing/LandingStorage'));
const LandingMeasure = lazy(() => import('./containers/Landing/LandingMeasure'));

const tagManagerArgs = {
    gtmId: 'GTM-WBCVHDH'
}

TagManager.initialize(tagManagerArgs);

render(
  <div className="App">
    <Router>
        <Suspense fallback={<div className="Loading">Loading...</div>}>
          <Route
            render={({ location }) => (
                <Switch location={location}>
                  <Route exact path='/' component={About} />
                  <Route exact path='/storage' component={LandingStorage} />
                  <Route exact path='/measure' component={LandingMeasure} />
                </Switch>
            )}
          />
        </Suspense>
    </Router>
  </div>,
  document.getElementById('root')
);
