import React from 'react';
import './App.css';
import Logo from './components/Logo';
import { BigLinkButton } from './components/Buttons';

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
        <div style={{ flexGrow: 1 }} />
        <Logo />
        <BigLinkButton to={'/scan'} content={'Code scannen'} appearance={'primary'} />
        <BigLinkButton to={'/enter_code'} content={'Code eingeben'} appearance={'primary'} />
        <BigLinkButton to={'/about'} content={'Über'} />
        <div style={{ flexGrow: 1 }} />
        <a href={'https://zerforschung.org/impressum/'}>Impressum</a>
      </div>
    </div>
  );
}

export default App;
