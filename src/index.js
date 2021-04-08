import React from 'react';
import TagManager from 'react-gtm-module';
import { render } from 'react-snapshot';

import './index.scss';

import About from './containers/About';

const tagManagerArgs = {
    gtmId: 'GTM-WBCVHDH'
}

TagManager.initialize(tagManagerArgs);

render(
  <div className="App">
    <About />
  </div>,
  document.getElementById('root')
);
