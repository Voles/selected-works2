import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.scss';

ReactGA.initialize('UA-56321552-1'); // Here we should use our GA id

class App extends Component {
  render() {
    ReactGA.pageview("/");
    return (
      <div className="App">
        <div className="App-header">
          <h1>Jonathan Dequeker</h1>
          <p className="App-intro">
            I am a Belgian Interior Architect.<br />
            Focussed on imagining new possibilities for a variety of spaces and managing the building process.<br />
            I also work together with Niels Evenepoel over&nbsp;at&nbsp;<a href="https://nejd.be">NEJD</a>.
          </p>
          <p>
            <a href="mailto:jonathan.dequeker@gmail.com">jonathan.dequeker@gmail.com</a><br />
            <a href="tel:+32 495 647823">+32 495 647823</a><br />
            <a href="https://www.linkedin.com/in/jonathandequeker/">LinkedIn</a>
          </p>
          <p>
            BTW BE0650.878.215<br />
            IBAN	BE88 7310 4131 8941<br />
            BIC	KREDBEBB
          </p>
        </div>
        <div className="App-image"></div>
      </div>
    );
  }
}

export default App;
