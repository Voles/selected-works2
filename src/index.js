import React, { Suspense, lazy } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import Analytics from 'react-router-ga';
import { render } from 'react-snapshot';

import './index.scss';

const Info = lazy(() => import('./components/Info/Info'));
const Splash = lazy(() => import('./components/Splash/Splash'));
const Landing = lazy(() => import('./containers/Landing/Landing'));

render(
  <div className="App">
    <Router>
      <Analytics id="UA-56321552-1" debug>
        <Suspense fallback={<div className="Loading">Loading...</div>}>
          <Route
            render={({ location }) => (
                <Switch location={location}>
                  <Route exact path='/'>
                    <Info />
                    <Splash />
                  </Route>
                  <Route exact path='/landing' component={Landing} />
                </Switch>
            )}
          />
        </Suspense>
      </Analytics>
    </Router>
  </div>,
  document.getElementById('root')
);
