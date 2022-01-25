import React from 'react';
import { Translate } from './components/Localization';
import { BigLinkButton } from './components/Buttons';
import { LinkFooter } from './components/LinkFooter';
import Logo from './components/Logo';
import './App.css';

function App(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: '2em',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          flex: 1,
          width: '100%',
          maxWidth: '400px',
          paddingBottom: '2em',
        }}
      >
        <Logo />
        <BigLinkButton
          to="/scan"
          content={<Translate id="app.scanCode" defaultMessage="Code scannen" />}
          appearance="primary"
        />
        <BigLinkButton
          to="/search"
          content={<Translate id="app.searchTests" defaultMessage="Tests durchsuchen" />}
          appearance="primary"
        />
        <BigLinkButton to="/about" content={<Translate id="app.about" defaultMessage="Über" />} />
      </div>
      <LinkFooter />
    </div>
  );
}

export default App;
