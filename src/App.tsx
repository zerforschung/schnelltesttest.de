import React from 'react';
import './App.css';
import Logo from './components/Logo';
import { BigLinkButton } from './components/Buttons';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
        'Open Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700',
        'Open Sans Condensed:ital,wght@0,300;0,700;1,300',
        'sans-serif'
    ]
  }
});

function App(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        alignContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          padding: '2em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          flexDirection: 'column',
        }}
      >
        <Logo />
        <BigLinkButton to={'/scan'} content={'Code scannen'} appearance={'primary'} />
        <BigLinkButton to={'/enter_code'} content={'Code eingeben'} appearance={'primary'} />
        <BigLinkButton to={'/about'} content={'Über'} />
      </div>
    </div>
  );
}

export default App;
