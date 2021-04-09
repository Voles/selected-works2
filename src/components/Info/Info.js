import React, { Component } from 'react';
import './Info.scss';

class Info extends Component {
  render() {
    return (
      <div className="Info" itemScope itemType="http://schema.org/Organization">
        <h1 itemProp="legalName">Jonathan Dequeker</h1>
        <p className="intro" itemProp="slogan">
          I am a Belgian Interior Architect.<br />
          Focussed on imagining new possibilities for a variety of spaces and managing the building process.
        </p>

        <p>
          <a itemProp="email" href="mailto:jonathan.dequeker@gmail.com">jonathan.dequeker@gmail.com</a><br />
          <a itemProp="telephone" href="tel:+32 495 647823">+32 495 647823</a><br />
          <a itemProp="url" href="https://www.linkedin.com/in/jonathandequeker/" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
        <p>
          BTW BE0650.878.215<br />
          IBAN	BE88 7310 4131 8941
        </p>
      </div>
    );
  }
}

export default Info;
